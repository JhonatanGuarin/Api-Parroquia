const DocumentType = require('../models/DocumentType-model');

module.exports = {
  createDocumentType: async (req, res) => {
    try {
      const { nombre_tipo_documento } = req.body;
      const newDocumentType = new DocumentType({ nombre_tipo_documento });
      await newDocumentType.save();
      res.status(201).json(newDocumentType);
    } catch (err) {
      console.error(err);
      res.status(400).json({ error: 'Error al crear el tipo de documento' });
    }
  },

  getAllDocumentTypes: async (req, res) => {
    try {
      const documentTypes = await DocumentType.find();
      res.status(200).json(documentTypes);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al obtener los tipos de documento' });
    }
  },

  updateDocumentTypeById: async (req, res) => {
    try {
      const documentType = await DocumentType.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
      if (!documentType) {
        return res.status(404).json({ error: 'Tipo de documento no encontrado' });
      }
      res.status(200).json(documentType);
    } catch (err) {
      console.error(err);
      res.status(400).json({ error: 'Error al actualizar el tipo de documento' });
    }
  },

  deleteDocumentTypeById: async (req, res) => {
    try {
      const documentType = await DocumentType.findByIdAndDelete(req.params.id);
      if (!documentType) {
        return res.status(404).json({ error: 'Tipo de documento no encontrado' });
      }
      res.status(200).json(documentType);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al eliminar el tipo de documento' });
    }
  }
};
