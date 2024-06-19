const express = require('express');
const router = express.Router();
const {
  createBaptism,
  getAllBaptisms,
  getBaptismById,
  updateBaptismById,
  deleteBaptismById
} = require('../controllers/controll-baptism');

// Ruta para crear un nuevo bautismo
router.post('/', createBaptism);

// Ruta para obtener todos los bautismos
router.get('/', getAllBaptisms);

// Ruta para obtener un bautismo por ID
router.get('/:id', getBaptismById);

// Ruta para actualizar un bautismo por ID
router.put('/:id', updateBaptismById);

// Ruta para eliminar un bautismo por ID
router.delete('/:id', deleteBaptismById);

module.exports = router;
