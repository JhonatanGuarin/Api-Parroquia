const mongoose = require('mongoose');
const accounting = require('./accounting-model');  // Importar el modelo de Partida
const Person = require('./user-model');  // Importar el modelo de Persona


const tithesSchema = accounting.discriminator('Tithes', new mongoose.Schema({
 
    Decimator: {
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

module.exports = tithesSchema;
