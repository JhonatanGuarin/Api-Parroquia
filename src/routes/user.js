const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/auth')
const checkRoleAuth = require('../middleware/roleAuth')


const {
  createUser,
  getAllUsers,
  updateUserById,
  deleteUserById
} = require('../controllers/controll-users');

// Ruta para crear un nuevo usuario
router.post('/', createUser);

// Ruta para obtener todos los usuarios
router.get('/', checkAuth, checkRoleAuth(["Usuario", "Admin"]), getAllUsers);

// Ruta para actualizar un usuario por ID
router.put('/:id', updateUserById);

// Ruta para eliminar un usuario por ID
router.delete('/:id', deleteUserById);

module.exports = router;
