const Marriage = require('../models/marriage-model'); // Asegúrate de que la ruta sea correcta

module.exports = {

// Obtener todos los registros de matrimonio
getAllMarriages : async (req, res) => {
  try {
    const marriages = await Marriage.find();
    res.json(marriages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
},

// Crear un nuevo registro de matrimonio
createMarriage : async (req, res) => {
  try {
    const newMarriage = new Marriage(req.body);
    const saveMarriage = await newMarriage.save();
    res.status(201).json(saveMarriage);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
},

// Actualizar un registro de matrimonio por ID
updateMarriage : async (req, res) => {
  try {
    const marriage = await Marriage.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!marriage) {
      return res.status(404).json({ message: 'Matrimonio no encontrado' });
    }
    res.json(marriage);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
},

// Eliminar un registro de matrimonio por ID
deleteMarriage : async (req, res) => {
  try {
    const deleteMarriage = await Marriage.findByIdAndDelete(req.params.id);
    if (!deleteMarriage) {
      return res.status(404).json({ message: 'Matrimonio no encontrado' });
    }
    res.json({ message: 'Matrimonio eliminado correctamente' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}


};
