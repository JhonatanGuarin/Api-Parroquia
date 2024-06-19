const Confirmation = require('../models/confirmation-model');


module.exports = {
// Obtener todas las confirmaciones
getAllConfirmations: async (req, res) => {
  try {
    const confirmations = await Confirmation.find();
    res.json(confirmations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
},

// Crear una nueva confirmación
createConfirmation : async (req, res) => {
  const confirmation = new Confirmation(req.body);
  try {
    const newConfirmation = await confirmation.save();
    res.status(201).json(newConfirmation);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
},

// Actualizar una confirmación por ID
updateConfirmation : async (req, res) => {
  const id = req.params.id;
  try {
    const updateConfirmation = await Confirmation.findByIdAndUpdate(id, req.body, { new: true });
    if (!updateConfirmation) {
      return res.status(404).json({ message: 'Confirmación no encontrada' });
    }
    res.json(updateConfirmation);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}, 
deleteConfirmationById : async (req, res) => {
    try {
      const deleteConfirmation = await Confirmation.findByIdAndDelete(req.params.id);
      if (!deleteConfirmation) {
        return res.status(404).json({ message: 'Confirmación no encontrado para eliminar' });
      }
      res.json({ message: 'Confirmación eliminado correctamente' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }


}
