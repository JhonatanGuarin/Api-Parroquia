const User = require('../models/user');

module.exports = {

  // Controlador para crear un nuevo usuario
  createUser: async (req, res) => {
    try {
      const { name, lastName, birthdate, documentNumber, typeDocument, mail, password, role } = req.body;
  
      // Verificar si el correo electrónico ya está registrado
      const existingUser = await User.findOne({ mail });
      if (existingUser) {
        return res.status(400).json({ error: 'El correo electrónico ya está registrado' });
      }
  
      // Verificar si la fecha de nacimiento es mayor a la fecha actual
      const currentDate = new Date();
      if (new Date(birthdate) > currentDate) {
        return res.status(400).json({ error: 'La fecha de nacimiento no puede ser mayor a la fecha actual' });
      }
  
      // Establecer el valor predeterminado del rol si no se proporciona
      const defaultRole = 'Usuario';
      const userRole = role || defaultRole;
  
      const user = new User({
        name,
        lastName,
        birthdate,
        documentNumber,
        typeDocument,
        mail,
        password,  // Guardamos la contraseña hasheada
        role: userRole
      });
  
      const result = await user.save();
  
      return res.status(201).json({ data: result });
    } catch (err) {
      return res.status(500).json({ error: err.message });
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
