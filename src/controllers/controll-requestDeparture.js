const RequestDeparture = require('../models/requestDeparture');
const { verifyToken } = require('../helpers/gerate-token');
const userModel = require('../models/user');
const BaptismModel = require('../models/baptism');
const ConfirmationModel = require('../models/confirmation');
const DeathModel = require('../models/death');
const MarriageModel = require('../models/marriage');


module.exports = {
    
    createRequestDeparture : async (req, res) => {
        try {
            const { departureType } = req.body;
            const token = req.headers.authorization?.split(' ').pop();
    
            if (!token) {
                return res.status(401).json({ error: 'No se proporcionó token de autorización' });
            }
    
            const tokenData = await verifyToken(token);
            const userData = await userModel.findById(tokenData._id);
    
            if (!userData) {
                return res.status(404).json({ error: 'Usuario no encontrado' });
            }
    
            let departureModel;
            switch (departureType) {
                case 'Baptism':
                    departureModel = BaptismModel;
                    break;
                case 'Confirmation':
                    departureModel = ConfirmationModel;
                    break;
                case 'Death':
                    departureModel = DeathModel;
                    break;
                case 'Marriage':
                    departureModel = MarriageModel;
                    break;
                default:
                    return res.status(400).json({ error: 'Tipo de partida no válido' });
            }
    
            const existingDeparture = await departureModel.findOne({ userId: userData._id });
    
            if (!existingDeparture) {
                return res.status(404).json({ error: 'No se encontró una partida para este usuario' });
            }
    
            const newRequestDeparture = new RequestDeparture({
                departureType,
                applicant: userData._id,
                departureId: existingDeparture._id
            });
    
            const savedRequestDeparture = await newRequestDeparture.save();
    
            res.status(201).json(savedRequestDeparture);
        } catch (error) {
            res.status(500).json({ error: 'Error al crear la solicitud de partida', details: error.message });
        }
    }

    }
