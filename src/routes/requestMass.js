const express = require('express');
const router = express.Router();


const {
    requestMass,
    getRequestStatus
  } = require('../controllers/controll-requestMass');

// Ruta para solicitar una misa
router.post('/request-mass', requestMass);

// Ruta para obtener el estado de las solicitudes
router.get('/request-status', getRequestStatus);

module.exports = router;