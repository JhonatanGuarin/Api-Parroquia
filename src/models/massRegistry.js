const mongoose = require('mongoose');

const massRegistrySchema = new mongoose.Schema({
  id_mass: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Mass',
    required: true,
  },
  id_user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  date_time_request: {
    type: Date,
    required: true,
  },
  reason: {
    type: String,
    required: true,
  }
});

const MassRegistry = mongoose.model('MassRegistry', massRegistrySchema);

module.exports = MassRegistry;
