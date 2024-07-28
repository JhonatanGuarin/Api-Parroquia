const express = require('express')
const router = express.Router()

const {
    createRequestDeparture,
    getAllRequests
  } = require('../controllers/controll-requestDeparture');


// Crear solicitud
router.post('/', createRequestDeparture);

router.get('/', getAllRequests);


module.exports = router