const mongoose = require('mongoose');

const confirmationSchema = new mongoose.Schema({
  confirmed: {
    type: mongoose.Schema.Types.ObjectId, // Tipo ObjectId para referencia
    ref: 'Users', // Referencia al modelo User
    required: true // El campo es obligatorio
  },
  godfather1: {
    type: String,
    required: true // El primer padrino es obligatorio
  },
  godfather2: {
    type: String,
    required: false // El segundo padrino es opcional
  },
  godfather3: {
    type: String,
    required: false // El tercer padrino es opcional
  },
  baptismPlace: {
    type: String,
    required: true
  },

});


const confirmation = mongoose.model('Confirmation', confirmationSchema);

module.exports = confirmation;
