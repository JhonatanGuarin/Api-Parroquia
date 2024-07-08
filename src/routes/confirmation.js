const express = require('express');
const router = express.Router();

module.exports = {
    getAllConfirmations,
    createConfirmation,
    updateConfirmation,
    deleteConfirmationById
  }=require('../controllers/controll-confirmation');

  // Ruta para obtener todas las confirmaciones
router.get('/', getAllConfirmations);

// Ruta para crear una nueva confirmación
router.post('/', createConfirmation);

// Ruta para actualizar una confirmación por ID
router.put('/:id', updateConfirmation);

router.delete('/:id', deleteConfirmationById);

module.exports = router;