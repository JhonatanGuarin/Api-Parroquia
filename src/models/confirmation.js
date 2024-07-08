const mongoose = require('mongoose');
const Departure = require('./departure');
const Person = require('./user');  // Importar el modelo de Persona

const confirmationSchema =Departure.discriminator('Confirmation', new mongoose.Schema({
  confirmed: {
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


module.exports = confirmationSchema;
