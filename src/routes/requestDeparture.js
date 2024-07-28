const express = require('express')
const router = express.Router()

const {
    createRequestDeparture,
    getAllRequests,
    sendDepartureDocument
  } = require('../controllers/controll-requestDeparture');


// Crear solicitud
router.post('/', createRequestDeparture);

router.post('/:requestId', sendDepartureDocument);

router.get('/', getAllRequests);


module.exports = router