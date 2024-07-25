const Death = require('../models/death'); // Ajusta la ruta según tu estructura de proyecto

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
      // Buscar al usuario fallecido por su número de documento
      const user = await User.findOne({ documentNumber: req.body.documentNumber });
      if (!user) {
        return res.status(404).json({ message: "Usuario no encontrado" });
      }
  
      // Crear un nuevo objeto de defunción, reemplazando el número de documento con el ObjectId del usuario
      const deathData = {
        ...req.body,
        dead: user._id  // Asignar el ObjectId del usuario fallecido
      };
      delete deathData.documentNumber;  // Eliminar documentNumber de los datos
  
      const newDeath = new Death(deathData);
      const saveDeath = await newDeath.save();
      res.status(201).json(saveDeath);
    } catch (error) {
      res.status(500).json({ message: error.message });
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
