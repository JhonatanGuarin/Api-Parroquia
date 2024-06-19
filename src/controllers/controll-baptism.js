const Bautismo = require('../models/baptism-model');


module.exports = {
// Controlador para crear un nuevo bautismo
createBautismo : async (req, res) => {
  try {
    const nuevoBautismo = new Bautismo(req.body);
    const bautismoGuardado = await nuevoBautismo.save();
    res.status(201).json(bautismoGuardado);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
},

// Controlador para obtener todos los bautismos
getAllBautismos : async (req, res) => {
  try {
    const bautismos = await Bautismo.find();
    res.json(bautismos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
},

// Controlador para obtener un bautismo por ID
getBautismoById : async (req, res) => {
  try {
    const bautismo = await Bautismo.findById(req.params.id);
    if (!bautismo) {
      return res.status(404).json({ message: 'Bautismo no encontrado' });
    }
    res.json(bautismo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
},

// Controlador para actualizar un bautismo por ID
updateBautismoById : async (req, res) => {
  try {
    const bautismoActualizado = await Bautismo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!bautismoActualizado) {
      return res.status(404).json({ message: 'Bautismo no encontrado para actualizar' });
    }
    res.json(bautismoActualizado);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
},

// Controlador para eliminar un bautismo por ID
deleteBautismoById : async (req, res) => {
  try {
    const bautismoEliminado = await Bautismo.findByIdAndDelete(req.params.id);
    if (!bautismoEliminado) {
      return res.status(404).json({ message: 'Bautismo no encontrado para eliminar' });
    }
    res.json({ message: 'Bautismo eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}};
