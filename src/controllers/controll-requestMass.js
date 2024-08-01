const RequestMass = require('../models/requestMass');
const MassSchedule = require('../models/massSchedule');

module.exports = {

    createRequestMass : async (req, res) => {
        try {
            const { date, time, intention } = req.body;
    
            // Validar que se reciban los datos necesarios
            if (!date || !time || !intention) {
                return res.status(400).json({ message: 'Faltan datos requeridos' });
            }
    
            // Crear una nueva solicitud de misa
            const newRequestMass = new RequestMass({
                date,  // Usar date como cadena
                time,
                intention,
            });
    
            // Buscar el horario en la programación de misas para la fecha especificada
            const schedule = await MassSchedule.findOne({ date });
    
            if (!schedule) {
                return res.status(404).json({ message: 'No se encontró una programación de misas para esta fecha' });
            }
    
            // Encontrar el horario específico y actualizar su estatus
            const timeSlotIndex = schedule.timeSlots.findIndex(slot => slot.time === time);
            
            if (timeSlotIndex === -1) {
                return res.status(404).json({ message: 'El horario especificado no está disponible para esta fecha' });
            }
    
            const timeSlot = schedule.timeSlots[timeSlotIndex];
    
            if (timeSlot.status === 'Ocupado') {
                return res.status(400).json({ message: 'El horario ya está ocupado' });
            }
    
            // Actualizar el estatus del horario a 'Ocupado'
            schedule.timeSlots[timeSlotIndex].status = 'Ocupado';
            await schedule.save();
    
            // Guardar la nueva solicitud de misa
            const savedRequestMass = await newRequestMass.save();
    
            // Enviar respuesta de éxito
            res.status(201).json(savedRequestMass);
        } catch (error) {
            console.error('Error al crear la solicitud de misa:', error);
            res.status(500).json({ message: 'Error al crear la solicitud de misa', error: error.message });
        }
    }
};