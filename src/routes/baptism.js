const express = require('express');
const router = express.Router();
const {
  createBaptism,
  getAllBaptisms,
  getBaptismByDocumentNumber,
  updateBaptismByDocumentNumber,
  deleteBaptismByDocumentNumber
} = require('../controllers/controll-baptism');

// Ruta para crear un nuevo bautismo
router.post('/', createBaptism);

// Ruta para obtener todos los bautismos
router.get('/', getAllBaptisms);

// Ruta para obtener un bautismo por número de documento
router.get('/:documentNumber', getBaptismByDocumentNumber);

// Ruta para actualizar un bautismo por número de documento
router.put('/:documentNumber', updateBaptismByDocumentNumber);

// Ruta para eliminar un bautismo por número de documento
router.delete('/:documentNumber', deleteBaptismByDocumentNumber);

module.exports = router;