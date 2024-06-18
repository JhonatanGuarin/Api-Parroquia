const mongoose = require('mongoose');
const Partida = require('./Partida-model');

const defuncionSchema = new mongoose.Schema({
  nombreDifunto: {
    type: String,
    required: true
  },
  Edad_Al_Fallecer: {
    type: Number,
    required: true
  },
  CausaMuerte: {
    type: String,
    required: true
  }, 
  Padre:{
    type: String,
    required: false
  }, 
  Madre: {
    type: String,
    required: false
  }

  // Otros campos específicos de Defunción
});

const Defuncion = Partida.discriminator('Defuncion', defuncionSchema);

module.exports = Defuncion;
