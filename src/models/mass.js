const mongoose = require('mongoose');

const massSchema = new mongoose.Schema({
  
  name_Priest: {
    type: String,
    required: true,
  },
  date_Mass: {
    type: Date,
    required: true,
  }
});

module.exports = mongoose.model('Mass', massSchema);
