const express = require('express');

const router = express.Router();
const {
  getAllMassRegistries,
  createMassRegistry,
  updateMassRegistry
} = require('../controllers/controll-Registry');

// Ruta para obtener todos los registros de misas
router.get('/', getAllMassRegistries);

// Ruta para crear un nuevo registro de misa
router.post('/', createMassRegistry);

// Ruta para actualizar un registro de misa por ID
router.put('/:id', updateMassRegistry);


module.exports = router;
