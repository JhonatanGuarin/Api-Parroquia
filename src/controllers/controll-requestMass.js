const RequestMass = require('../models/requestMass');
const MassSchedule = require('../models/massSchedule');

module.exports = {
    createRequestMass: async (req, res) => {
        try {
            const { date, time, intention, applicant } = req.body;
            const selectedDate = new Date(date);
            const today = new Date();
            today.setHours(0, 0, 0, 0);

            if (selectedDate < today) {
                return res.status(400).json({ message: 'No se pueden solicitar misas para fechas pasadas' });
            }

            const schedule = await MassSchedule.findOne({ date: selectedDate.toISOString().split('T')[0] });

            if (!schedule) {
                return res.status(404).json({ message: 'No hay horarios disponibles para esta fecha' });
            }

            const requestedTimeSlot = schedule.timeSlots.find(slot => slot.time === time && slot.status === 'Libre');

            if (!requestedTimeSlot) {
                return res.status(400).json({ message: 'El horario solicitado no está disponible' });
            }

            const newRequestMass = new RequestMass({
                date: selectedDate,
                time,
                intention,
                applicant,
                status: 'Pendiente'
            });

            const savedRequest = await newRequestMass.save();

            requestedTimeSlot.status = 'Pendiente';
            await schedule.save();

            res.status(201).json(savedRequest);
        } catch (error) {
            console.error('Error al crear la solicitud de misa:', error);
            res.status(500).json({ message: 'Error al crear la solicitud de misa', error: error.message });
        }
    },

    getRequestMasses: async (req, res) => {
        try {
            const requests = await RequestMass.find().populate('applicant', 'name email');
            res.status(200).json(requests);
        } catch (error) {
            console.error('Error al obtener las solicitudes de misa:', error);
            res.status(500).json({ message: 'Error al obtener las solicitudes de misa', error: error.message });
        }
    },

    updateRequestStatus: async (req, res) => {
        try {
            const { id } = req.params;
            const { status } = req.body;

            const request = await RequestMass.findById(id);

            if (!request) {
                return res.status(404).json({ message: 'Solicitud de misa no encontrada' });
            }

            request.status = status;
            await request.save();

            // Actualizar el estado en el MassSchedule
            const schedule = await MassSchedule.findOne({ date: request.date.toISOString().split('T')[0] });
            if (schedule) {
                const timeSlot = schedule.timeSlots.find(slot => slot.time === request.time);
                if (timeSlot) {
                    timeSlot.status = status === 'Aprobada' ? 'Confirmado' : 'Libre';
                    await schedule.save();
                }
            }

            res.status(200).json(request);
        } catch (error) {
            console.error('Error al actualizar el estado de la solicitud:', error);
            res.status(500).json({ message: 'Error al actualizar el estado de la solicitud', error: error.message });
        }
    },

    cancelRequestMass: async (req, res) => {
        try {
            const { id } = req.params;

            const request = await RequestMass.findById(id);

            if (!request) {
                return res.status(404).json({ message: 'Solicitud de misa no encontrada' });
            }

            // Liberar el horario en el schedule
            const schedule = await MassSchedule.findOne({ date: request.date.toISOString().split('T')[0] });
            if (schedule) {
                const timeSlot = schedule.timeSlots.find(slot => slot.time === request.time);
                if (timeSlot) {
                    timeSlot.status = 'Libre';
                    await schedule.save();
                }
            }

            // Eliminar la solicitud
            await RequestMass.findByIdAndDelete(id);

            res.status(200).json({ message: 'Solicitud de misa cancelada y horario liberado' });
        } catch (error) {
            console.error('Error al cancelar la solicitud de misa:', error);
            res.status(500).json({ message: 'Error al cancelar la solicitud de misa', error: error.message });
        }
    }
};