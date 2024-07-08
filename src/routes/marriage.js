const express = require('express');
const router = express.Router();
const {
  getAllMarriages,
  createMarriage,
  updateMarriage,
  deleteMarriage
} = require('../controllers/controll-marriage');

// Ruta para obtener todos los registros de matrimonio
router.get('/', getAllMarriages);

// Ruta para crear un nuevo registro de matrimonio
router.post('/', createMarriage);

// Ruta para actualizar un registro de matrimonio por ID
router.put('/:id', updateMarriage);

// Ruta para eliminar un registro de matrimonio por ID
router.delete('/:id', deleteMarriage);

module.exports = router;
