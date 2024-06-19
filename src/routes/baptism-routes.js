const express = require('express');
const router = express.Router();
const {
  createBautismo,
  getAllBautismos,
  getBautismoById,
  updateBautismoById,
  deleteBautismoById
} = require('../controllers/controll-baptism');

// Ruta para crear un nuevo bautismo
router.post('/', createBautismo);

// Ruta para obtener todos los bautismos
router.get('/', getAllBautismos);

// Ruta para obtener un bautismo por ID
router.get('/:id', getBautismoById);

// Ruta para actualizar un bautismo por ID
router.put('/:id', updateBautismoById);

// Ruta para eliminar un bautismo por ID
router.delete('/:id', deleteBautismoById);

module.exports = router;
