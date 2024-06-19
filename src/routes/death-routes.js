const express = require('express');
const router = express.Router();
const {
  getAllDefunciones,
  createDefuncion,
  updateDefuncion,
  deleteDefuncion
} = require('../controllers/controll-death'); // Ajusta la ruta según tu estructura de proyecto

// Ruta para obtener todas las defunciones
router.get('/', getAllDefunciones);

// Ruta para crear una nueva defunción
router.post('/', createDefuncion);

// Ruta para actualizar una defunción por ID
router.put('/:id', updateDefuncion);

// Ruta para eliminar una defunción por ID
router.delete('/:id', deleteDefuncion);

module.exports = router;
