const express = require('express');
const router = express.Router();


const {
  createRequestMass,
  getAllRequestMasses
  } = require('../controllers/controll-requestMass');

// Crear una nueva solicitud de misa
router.post('/', createRequestMass);

router.get('/earring', getAllRequestMasses);


module.exports = router;