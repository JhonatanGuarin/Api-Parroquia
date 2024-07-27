const mongoose = require('mongoose');

const requestDepartureSchema = new mongoose.Schema({

    requestDate: {
        type: Date,
        default: Date.now, 
        required: true
    },
    departureType: {
        type: String,
        enum: ['Baptisms', 'Confirmations', 'Deaths', 'Marriages'], 
        required: true
    },
    applicant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users', 
        required: true
    },
    departureId: { 
        type: mongoose.Schema.Types.ObjectId, 
        refPath: 'departureType', 
        required: true 
    }

});

const requestDeparture = mongoose.model('RequestDeparture', requestDepartureSchema);

module.exports = requestDeparture;
