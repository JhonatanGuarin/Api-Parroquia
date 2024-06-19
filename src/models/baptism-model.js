const mongoose = require('mongoose');
const departure = require('./departure-model');  // Importar el modelo de Partida
const Person = require('./user-model');  // Importar el modelo de Persona

const baptismSchema = departure.discriminator('Baptism', new mongoose.Schema({
 
  baptized: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Person',
        required: true
    },
   
  godfather1: {
    type: String,
    required: true
  },
  
  godfather2: {
    type: String,
    required: false  // Opcional, no es necesario colocar "required: false" ya que es por defecto
  },
  
  godfather3: {
    type: String,
    required: false  // Opcional
  },
  // Otros campos específicos para bautismo
}));

module.exports = baptismSchema;
