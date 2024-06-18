const mongoose = require('mongoose');
const Partida = require('./Partida-model');

const matrimonioSchema = new mongoose.Schema({
  esposo: {
    type: String,
    required: true
  },
  esposa: {
    type: String,
    required: true
  },
  padreEsposo:{
    type: String,
    required: false
  },
  madreEsposo:{
    type: String,
    required: false
    },
    padreEsposa:{
        type: String,
        required: false
      },
      madreEsposa:{
        type: String,
        required: false
        },
  padrino1: {
    type: String,
    required: true
  },
  padrino2: {
    type: String,
    required: true  
  },
  Testigo: {
    type: String,
    required: true  
  },
  // Otros campos específicos de Matrimonio
});

const Matrimonio = Partida.discriminator('Matrimonio', matrimonioSchema);

module.exports = Matrimonio;
