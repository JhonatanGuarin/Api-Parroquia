const express = require('express');
const router = express.Router();


const {
  createRequestMass,
  getPendingRequestMasses,
  getConfirmedRequestMasses,
  confirmRequest
  } = require('../controllers/controll-requestMass');

// Crear una nueva solicitud de misa
router.post('/', createRequestMass);


router.post('/confirm/:id', confirmRequest);

router.get('/earring', getPendingRequestMasses);

router.get('/confirmed', getConfirmedRequestMasses);


module.exports = router;