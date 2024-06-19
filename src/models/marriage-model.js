const mongoose = require('mongoose');
const departure = require('./departure-model');

const marriageSchema = new mongoose.Schema({
  husband: {
    type: String,
    required: true
  },
  wife: {
    type: String,
    required: true
  },
  father_husband:{
    type: String,
    required: false
  },
  mother_husband:{
    type: String,
    required: false
    },
  father_wife:{
        type: String,
        required: false
      },
  mother_wife:{
        type: String,
        required: false
        },
  godfather1: {
    type: String,
    required: true
  },
  godfather2: {
    type: String,
    required: true  
  },
  witness: {
    type: String,
    required: true  
  },
  // Otros campos específicos de Matrimonio
});

const marriage = departure.discriminator('Marriage', marriageSchema);

module.exports = marriage;
