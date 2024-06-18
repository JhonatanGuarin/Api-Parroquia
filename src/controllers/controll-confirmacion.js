const Confirmacion = require('../models/confirmacion-model');


module.exports = {
// Obtener todas las confirmaciones
getAllConfirmaciones: async (req, res) => {
  try {
    const confirmaciones = await Confirmacion.find();
    res.json(confirmaciones);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
},

// Crear una nueva confirmación
createConfirmacion : async (req, res) => {
  const confirmacion = new Confirmacion(req.body);
  try {
    const nuevaConfirmacion = await confirmacion.save();
    res.status(201).json(nuevaConfirmacion);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
},

// Actualizar una confirmación por ID
updateConfirmacion : async (req, res) => {
  const id = req.params.id;
  try {
    const confirmacionActualizada = await Confirmacion.findByIdAndUpdate(id, req.body, { new: true });
    if (!confirmacionActualizada) {
      return res.status(404).json({ message: 'Confirmación no encontrada' });
    }
    res.json(confirmacionActualizada);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}, 
deleteConfirmacionById : async (req, res) => {
    try {
      const ConfirmacionEliminado = await Confirmacion.findByIdAndDelete(req.params.id);
      if (!ConfirmacionEliminado) {
        return res.status(404).json({ message: 'Confirmación no encontrado para eliminar' });
      }
      res.json({ message: 'Confirmación eliminado correctamente' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }


}
