const User = require('../models/user-model');


module.exports = {

  // Controlador para crear un nuevo usuario
  createUser : async (req, res) => {
    try {
      // Extraer los datos del cuerpo de la solicitud
      const { name, lastName, age, documentNumber, typeDocument, mail, password, role } = req.body;

      // Crear una nueva instancia de User
      const newUser = new User({
        name,
        lastName,
        age,
        documentNumber,
        typeDocument,
        mail,
        password,
        role
      });

      // Guardar la nueva instancia en la base de datos
      await newUser.save();

      // Respuesta exitosa con el objeto creado
      res.status(201).json(newUser);
    } catch (err) {
      // Manejo de errores
      console.error(err);
      res.status(400).json({ error: 'Error al crear el usuario' });
    }
  },

  // Controlador para obtener todos los usuarios
  getAllUsers : async (req, res) => {
    try {
      const users = await User.find().populate('typeDocument');
      console.log('Usuarios obtenidos:', users); // Log para depuración
      res.status(200).send(users);
    } catch (err) {
        console.error('Error al obtener usuarios:', err); // Log para depuración
        res.status(500).send({ error: 'Error al obtener usuarios', details: err.message });
    }
  },

  // Controlador para actualizar un usuario por ID
  updateUserById : async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
      if (!user) {
        return res.status(404).send();
      }
      res.status(200).send(user);
    } catch (err) {
      res.status(400).send(err);
    }
  },

  // Controlador para eliminar un usuario por ID
  deleteUserById : async (req, res) => {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      if (!user) {
        return res.status(404).send();
      }
      res.status(200).send(user);
    } catch (err) {
      res.status(500).send(err);
    }
  }
};
