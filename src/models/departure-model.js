const mongoose = require('mongoose');

const partidaSchema = new mongoose.Schema({
  número_partida: {
    type: Number,
    required: true
  },
  sacerdote: {
    type: String,
    required: true
  },
  fecha_expedición: {
    type: Date,
    required: true
  },
  tipo: {
    type: String,
    required: true,
    default: 'Partida'
  }, 
  
});

const Partida = mongoose.model('Partida', partidaSchema);

module.exports = Partida;
