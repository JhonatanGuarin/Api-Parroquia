const Tithes = require('../models/tithes-model');

module.exports = {
 

  createTithes : async (req, res) => {
    try {
      const newtithes = new Tithes(req.body);
      const savetithes = await newtithes.save();
      res.status(201).json(savetithes);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getAllTithes: async (req, res) => {
    try {
      const tithes = await Tithes.find();
      res.json(tithes);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getTithesById: async (req, res) => {
    try {
      const tithes = await Tithes.findById(req.params.id).populate('Decimator', 'name'); // Populate para obtener el nombre de la persona
      if (!tithes) {
        return res.status(404).json({ message: 'Diezmo no encontrado' });
      }
      res.json(tithes);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  updateTithesById: async (req, res) => {
    try {
      const updateTithes = await Tithes.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updateTithes) {
        return res.status(404).json({ message: 'Diezmo no encontrado para actualizar' });
      }
      res.json(updateTithes);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  deleteTithesById: async (req, res) => {
    try {
      const deleteTithes = await Tithes.findByIdAndDelete(req.params.id);
      if (!deleteTithes) {
        return res.status(404).json({ message: 'Diezmo no encontrado para eliminar' });
      }
      res.json({ message: 'Diezmo eliminado correctamente' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};
