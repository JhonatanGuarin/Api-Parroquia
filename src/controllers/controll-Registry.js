const MassRegistry = require('../models/massRegistry-model');


module.exports = {
// Obtener todos los registros de misas
getAllMassRegistries : async (req, res) => {
  try {
    const registries = await MassRegistry.find();
    res.json(registries);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
},

// Crear un nuevo registro de misa
createMassRegistry : async (req, res) => {
  const massRegistry = new MassRegistry({
    id_misa: req.body.id_misa,
    id_usuario: req.body.id_usuario,
    fecha_hora_solicitud: req.body.fecha_hora_solicitud,
    motivo: req.body.motivo
  });

  try {
    const newMassRegistry = await massRegistry.save();
    res.status(201).json(newMassRegistry);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
},


// Actualizar un registro de misa por ID
updateMassRegistry : async (req, res) => {
  try {
    const updatedMassRegistry = await MassRegistry.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedMassRegistry) {
      return res.status(404).json({ message: 'Registro no encontrado' });
    }
    res.json(updatedMassRegistry);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}
};
