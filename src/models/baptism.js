const mongoose = require('mongoose');

const baptismSchema = new mongoose.Schema({

  baptized: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Users', 
    required: true 
  },

  godfather1: {
  type: String,
  required: true
  },

  godfather2: {
  type: String,
  required: false 
  },

  godfather3: {
  type: String,
  required: false 
  }

});


const baptism = mongoose.model('Baptism', baptismSchema);

module.exports = baptism;
