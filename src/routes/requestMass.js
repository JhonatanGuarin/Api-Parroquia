const express = require('express');
const router = express.Router();


const {
  createRequestMass
  } = require('../controllers/controll-requestMass');

// Crear una nueva solicitud de misa
router.post('/', createRequestMass);



module.exports = router;