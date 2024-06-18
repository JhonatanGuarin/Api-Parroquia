const Defuncion = require('../models/Defuncion-model'); // Ajusta la ruta según tu estructura de proyecto

module.exports = {
  // Obtener todas las defunciones
  getAllDefunciones: async (req, res) => {
    try {
      const defunciones = await Defuncion.find();
      res.json(defunciones);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  // Crear una nueva defunción
  createDefuncion: async (req, res) => {
    try {
      const nuevaDefuncion = new Defuncion(req.body);
      const defuncionGuardada = await nuevaDefuncion.save();
      res.status(201).json(defuncionGuardada);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  // Actualizar una defunción por ID
  updateDefuncion: async (req, res) => {
    try {
      const defuncionActualizada = await Defuncion.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!defuncionActualizada) {
        return res.status(404).json({ message: 'Defunción no encontrada' });
      }
      res.json(defuncionActualizada);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  // Eliminar una defunción por ID
  deleteDefuncion: async (req, res) => {
    try {
      const defuncionEliminada = await Defuncion.findByIdAndDelete(req.params.id);
      if (!defuncionEliminada) {
        return res.status(404).json({ message: 'Defunción no encontrada' });
      }
      res.json({ message: 'Defunción eliminada correctamente' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
};
