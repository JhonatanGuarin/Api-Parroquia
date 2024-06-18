const Mass = require('../models/mass-model');


module.exports = {

// Controlador para crear una nueva misa
createMass : async (req, res) => {
try {
  // Extraer los datos del cuerpo de la solicitud, excluyendo id_misa
  const { nombre_sacerdote, fecha_Misa } = req.body;

  // Crear una nueva instancia de Mass
  const newMass = new Mass({
    nombre_sacerdote,
    fecha_Misa
  });

  // Guardar la nueva instancia en la base de datos
  await newMass.save();

  // Respuesta exitosa con el objeto creado
  res.status(201).json(newMass);
} catch (err) {
  // Manejo de errores
  console.error(err);
  res.status(400).json({ error: 'Error al crear la misa' });
}
},

// Controlador para obtener todas las misas
getAllMasses : async (req, res) => {
  try {
    const masses = await Mass.find();
    res.status(200).send(masses);
  } catch (err) {
    res.status(500).send(err);
  }
},

// Controlador para actualizar una misa por ID
updateMassById : async (req, res) => {
  try {
    const mass = await Mass.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!mass) {
      return res.status(404).send();
    }
    res.status(200).send(mass);
  } catch (err) {
    res.status(400).send(err);
  }
  
},

// Controlador para eliminar una misa por ID
deleteMassById : async (req, res) => {
  try {
    const mass = await Mass.findByIdAndDelete(req.params.id);
    if (!mass) {
      return res.status(404).send();
    }
    res.status(200).send(mass);
  } catch (err) {
    res.status(500).send(err);
  }
}
}

