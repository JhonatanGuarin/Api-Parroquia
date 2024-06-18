const mongoose = require('mongoose');

const massSchema = new mongoose.Schema({
  
  nombre_sacerdote: {
    type: String,
    required: true,
  },
  fecha_Misa: {
    type: Date,
    required: true,
  }
});

module.exports = mongoose.model('Mass', massSchema);
