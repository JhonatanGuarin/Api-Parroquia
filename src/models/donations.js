const mongoose = require('mongoose');
const accounting = require('./accounting');  // Importar el modelo de Partida
//const Person = require('./user-model');  // Importar el modelo de Persona


const donationSchema = accounting.discriminator('Donation', new mongoose.Schema({
 
    donor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Person',
        required: true
    },
  cost: {
    type: String,
    required: true
  },
  reason: {
    type: String,
    required: true
  },
  
  
}));

module.exports = donationSchema;
