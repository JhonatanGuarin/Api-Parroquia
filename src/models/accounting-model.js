const mongoose = require('mongoose');

const accountingSchema = new mongoose.Schema({
  date_time: {
    type: Date,
    required: true
  },

  type: {
  type: String,
  required: true,
  default: 'Accounting'
},

});

const accounting = mongoose.model('Accounting', accountingSchema);

module.exports = accounting;