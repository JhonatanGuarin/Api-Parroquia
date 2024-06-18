const Matrimonio = require('../models/Matrimonio-model'); // Asegúrate de que la ruta sea correcta

module.exports = {

// Obtener todos los registros de matrimonio
getAllMatrimonios : async (req, res) => {
  try {
    const matrimonios = await Matrimonio.find();
    res.json(matrimonios);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
},

// Crear un nuevo registro de matrimonio
createMatrimonio : async (req, res) => {
  try {
    const nuevoMatrimonio = new Matrimonio(req.body);
    const matrimonioGuardado = await nuevoMatrimonio.save();
    res.status(201).json(matrimonioGuardado);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
},

// Actualizar un registro de matrimonio por ID
updateMatrimonio : async (req, res) => {
  try {
    const matrimonio = await Matrimonio.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!matrimonio) {
      return res.status(404).json({ message: 'Matrimonio no encontrado' });
    }
    res.json(matrimonio);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
},

// Eliminar un registro de matrimonio por ID
deleteMatrimonio : async (req, res) => {
  try {
    const matrimonioEliminado = await Matrimonio.findByIdAndDelete(req.params.id);
    if (!matrimonioEliminado) {
      return res.status(404).json({ message: 'Matrimonio no encontrado' });
    }
    res.json({ message: 'Matrimonio eliminado correctamente' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}


};
