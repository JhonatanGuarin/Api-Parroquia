const express = require('express');
const router = express.Router();


const {
  createRequestMass,
  getRequestMasses,
  updateRequestStatus,
  cancelRequestMass,
  
  } = require('../controllers/controll-requestMass');

// Crear una nueva solicitud de misa
router.post('/', createRequestMass);

// Obtener todas las solicitudes de misa
router.get('/', getRequestMasses);

// Actualizar el estado de una solicitud de misa
router.put('/:id/status', updateRequestStatus);

// Cancelar una solicitud de misa
router.delete('/:id', cancelRequestMass);

module.exports = router;