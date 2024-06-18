const mongoose = require('mongoose');

const documentTypeSchema = new mongoose.Schema({
      nombre_tipo_documento: {
        type: String,
        required: true,
      }
});

const DocumentType = mongoose.model('DocumentType', documentTypeSchema);

module.exports = DocumentType;
