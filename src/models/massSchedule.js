const mongoose = require('mongoose');

const massScheduleSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true
  },

  timeSlots: [
    {
      time: {
        type: String, 
        required: true
      },
      available: {
        type: Boolean,
        default: true
      }
    }
  ]
});

const massSchedule = mongoose.model('MassSchedule', massScheduleSchema);

module.exports = massSchedule;
