const express = require('express');
const router = express.Router();
const {
  getAllMatrimonios,
  createMatrimonio,
  updateMatrimonio,
  deleteMatrimonio
} = require('../controllers/controll-matrimonio');

// Ruta para obtener todos los registros de matrimonio
router.get('/', getAllMatrimonios);

// Ruta para crear un nuevo registro de matrimonio
router.post('/', createMatrimonio);

// Ruta para actualizar un registro de matrimonio por ID
router.put('/:id', updateMatrimonio);

// Ruta para eliminar un registro de matrimonio por ID
router.delete('/:id', deleteMatrimonio);

module.exports = router;
