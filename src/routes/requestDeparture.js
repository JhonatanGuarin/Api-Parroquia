const express = require('express')
const router = express.Router()

const {
    createRequestDeparture
  } = require('../controllers/controll-requestDeparture');


// Crear solicitud
router.post('/', createRequestDeparture);


module.exports = router