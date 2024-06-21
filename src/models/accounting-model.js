const mongoose = require('mongoose');

const accountingSchema = new mongoose.Schema({
  date_time: {
    type: Date,
    required: true
  }
},{
  discriminatorKey: 'Kind', collection:'accountings'
});

const accounting = mongoose.model('Accounting', accountingSchema);

module.exports = accounting;