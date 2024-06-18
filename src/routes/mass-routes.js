const express = require('express');
const router = express.Router();
const {
  createMass,
  getAllMasses,
  updateMassById,
  deleteMassById
} = require('../controllers/controll-mass');

// Ruta para crear una nueva misa
router.post('/', createMass);

// Ruta para obtener todas las misas
router.get('/', getAllMasses);

// Ruta para actualizar una misa por ID
router.put('/:id', updateMassById);

// Ruta para eliminar una misa por ID
router.delete('/:id', deleteMassById);

module.exports = router;

