const mongoose = require('mongoose');
const Partida = require('./Partida-model');  // Importar el modelo de Partida
const Persona = require('./user-model');  // Importar el modelo de Persona

const bautismoSchema = Partida.discriminator('Bautismo', new mongoose.Schema({
    bautizado: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Persona',
        required: true
    },
   
    padrino1: {
    type: String,
    required: true
  },
  padrino2: {
    type: String,
    required: false  // Opcional, no es necesario colocar "required: false" ya que es por defecto
  },
  padrino3: {
    type: String,
    required: false  // Opcional
  },
  // Otros campos específicos para bautismo
}));

module.exports = bautismoSchema;
