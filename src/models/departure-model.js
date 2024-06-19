const mongoose = require('mongoose');

const departureSchema = new mongoose.Schema({
  num_departure: {
    type: Number,
    required: true
  },
  priest: {
    type: String,
    required: true
  },
  expedition_date: {
    type: Date,
    required: true
  },
  type: {
    type: String,
    required: true,
    default: 'Departure'
  }, 
  
});

const departure = mongoose.model('Departure', departureSchema);

module.exports = departure;
