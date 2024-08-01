const express = require('express');
const router = express.Router();


const {
  createRequestMass,
  getPendingRequestMasses,
  getConfirmedRequestMasses
  } = require('../controllers/controll-requestMass');

// Crear una nueva solicitud de misa
router.post('/', createRequestMass);

router.get('/earring', getPendingRequestMasses);

router.get('/confirmed', getConfirmedRequestMasses);


module.exports = router;