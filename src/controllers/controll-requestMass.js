const RequestMass = require('../models/requestMass');
const MassSchedule = require('../models/massSchedule');

module.exports = {
    requestMass: async (req, res) => {
        try {
            const { date, time, intention } = req.body;
            const selectedDate = new Date(date);

            // Verificar si el horario está disponible
            const schedule = await MassSchedule.findOne({ 
                date: selectedDate.toISOString().split('T')[0],
                'timeSlots.time': time,
                'timeSlots.available': true
            });

            if (!schedule) {
                return res.status(400).json({ message: 'El horario seleccionado no está disponible' });
            }

            // Crear la solicitud de misa
            const newRequest = new RequestMass({
                date: selectedDate,
                time,
                intention
            });

            const savedRequest = await newRequest.save();

            // Actualizar el horario como no disponible
            await MassSchedule.updateOne(
                { _id: schedule._id, 'timeSlots.time': time },
                { $set: { 'timeSlots.$.available': false } }
            );

            res.status(201).json(savedRequest);
        } catch (error) {
            console.error('Error al solicitar la misa:', error);
            res.status(400).json({ message: error.message });
        }
    },

    getRequestStatus: async (req, res) => {
        try {
            const requests = await RequestMass.find({}, 'date time status');
            res.status(200).json(requests);
        } catch (error) {
            console.error('Error al obtener el estado de las solicitudes:', error);
            res.status(500).json({ message: 'Error al obtener el estado de las solicitudes' });
        }
    }
};