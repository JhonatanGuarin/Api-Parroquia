const mongoose = require('mongoose');

const massRegistrySchema = new mongoose.Schema({
    id_misa: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Mass',
    required: true,
  },
  id_usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  fecha_hora_solicitud: {
    type: Date,
    required: true,
  },
  motivo: {
    type: String,
    required: true,
  }
});

const MassRegistry = mongoose.model('MassRegistry', massRegistrySchema);

module.exports = MassRegistry;
