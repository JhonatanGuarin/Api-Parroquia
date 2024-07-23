const mongoose = require('mongoose');

const deathSchema = new mongoose.Schema({
  deceased_name: {
    type: String,
    required: true
  },
  age_at_death: {
    type: Number,
    required: true
  },
  cause_death: {
    type: String,
    required: true
  }, 
  Father:{
    type: String,
    required: false
  }, 
  Mother: {
    type: String,
    required: false
  }

  // Otros campos específicos de Defunción
});

const death = mongoose.model('Death', deathSchema);

module.exports = death;
