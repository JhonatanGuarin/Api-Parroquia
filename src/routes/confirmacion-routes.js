const express = require('express');
const router = express.Router();

module.exports = {
    getAllConfirmaciones,
    createConfirmacion,
    updateConfirmacion,
    deleteConfirmacionById
  }=require('../controllers/controll-confirmacion');

  // Ruta para obtener todas las confirmaciones
router.get('/', getAllConfirmaciones);

// Ruta para crear una nueva confirmación
router.post('/', createConfirmacion);

// Ruta para actualizar una confirmación por ID
router.put('/:id', updateConfirmacion);

router.delete('/:id', deleteConfirmacionById);

module.exports = router;