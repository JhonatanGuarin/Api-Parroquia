const express = require('express');
const router = express.Router();
const {
  getAllDeaths,
  createDeath,
  updateDeath,
  deleteDeath
} = require('../controllers/controll-death'); // Ajusta la ruta según tu estructura de proyecto

// Ruta para obtener todas las defunciones
router.get('/', getAllDeaths);

// Ruta para crear una nueva defunción
router.post('/', createDeath);

// Ruta para actualizar una defunción por ID
router.put('/:id', updateDeath);

// Ruta para eliminar una defunción por ID
router.delete('/:id', deleteDeath);

module.exports = router;
