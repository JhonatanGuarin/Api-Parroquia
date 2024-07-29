const mongoose = require('mongoose');

const requestMassSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    intention: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: 'pending'
    }
});

const RequestMass = mongoose.model('RequestMass', requestMassSchema);

module.exports = RequestMass;