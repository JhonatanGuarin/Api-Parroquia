const Death = require('../models/death-model'); // Ajusta la ruta según tu estructura de proyecto

module.exports = {
  // Obtener todas las defunciones
  getAllDeaths: async (req, res) => {
    try {
      const deaths = await Death.find();
      res.json(deaths);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  // Crear una nueva defunción
  createDeath: async (req, res) => {
    try {
      const newDeaths = new Death(req.body);
      const saveDeaths = await newDeaths.save();
      res.status(201).json(saveDeaths);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  // Actualizar una defunción por ID
  updateDeath: async (req, res) => {
    try {
      const updateDeaths = await Death.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updateDeaths) {
        return res.status(404).json({ message: 'Defunción no encontrada' });
      }
      res.json(updateDeaths);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  // Eliminar una defunción por ID
  deleteDeath: async (req, res) => {
    try {
      const deleteDeaths = await Death.findByIdAndDelete(req.params.id);
      if (!deleteDeaths) {
        return res.status(404).json({ message: 'Defunción no encontrada' });
      }
      res.json({ message: 'Defunción eliminada correctamente' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
};
