const Marriage = require('../models/marriage'); // Asegúrate de que la ruta sea correcta
const User = require('../models/user')

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
createMarriage: async (req, res) => {
  try {
    // Buscar al esposo por su número de documento
    const husband = await User.findOne({ documentNumber: req.body.husbandDocumentNumber });
    if (!husband) {
      return res.status(404).json({ message: "Esposo no encontrado" });
    }

    // Buscar a la esposa por su número de documento
    const wife = await User.findOne({ documentNumber: req.body.wifeDocumentNumber });
    if (!wife) {
      return res.status(404).json({ message: "Esposa no encontrada" });
    }

    // Crear un nuevo objeto de matrimonio, reemplazando los números de documento con los ObjectId de los usuarios
    const marriageData = {
      ...req.body,
      husband: husband._id,
      wife: wife._id
    };
    
    // Eliminar los números de documento del objeto de datos
    delete marriageData.husbandDocumentNumber;
    delete marriageData.wifeDocumentNumber;

    const newMarriage = new Marriage(marriageData);
    const saveMarriage = await newMarriage.save();
    res.status(201).json(saveMarriage);
  } catch (error) {
    res.status(500).json({ message: error.message });
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
