const Baptism = require('../models/baptism');
const User = require('../models/user')


module.exports = {
// Controlador para crear un nuevo bautismo
createBaptism: async (req, res) => {
  try {
    // Primero, buscar el usuario por su número de documento
    const user = await User.findOne({ documentNumber: req.body.documentNumber });
    
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    // Crear un nuevo objeto de bautismo, reemplazando documentNumber con el ObjectId del usuario
    const baptismData = {
      ...req.body,
      baptized: user._id  // Asignar el ObjectId del usuario
    };
    delete baptismData.documentNumber;  // Eliminar documentNumber de los datos

    const newBaptism = new Baptism(baptismData);
    const saveBaptism = await newBaptism.save();
    res.status(201).json(saveBaptism);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
},

// Controlador para obtener todos los bautismos
getAllBaptisms : async (req, res) => {
  try {
    const baptisms = await Baptism.find();
    res.json(baptisms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
},

// Controlador para obtener un bautismo por ID
getBaptismById : async (req, res) => {
  try {
    const baptism = await Baptism.findById(req.params.id);
    if (!baptism) {
      return res.status(404).json({ message: 'Bautismo no encontrado' });
    }
    res.json(baptism);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
},

// Controlador para actualizar un bautismo por ID
updateBaptismById : async (req, res) => {
  try {
    const updateBaptism = await Baptism.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updateBaptism) {
      return res.status(404).json({ message: 'Bautismo no encontrado para actualizar' });
    }
    res.json(updateBaptism);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
},

// Controlador para eliminar un bautismo por ID
deleteBaptismById : async (req, res) => {
  try {
    const deleteBaptism = await Baptism.findByIdAndDelete(req.params.id);
    if (!deleteBaptism) {
      return res.status(404).json({ message: 'Bautismo no encontrado para eliminar' });
    }
    res.json({ message: 'Bautismo eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}};
