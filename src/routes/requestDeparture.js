const express = require('express')
const router = express.Router()

const {
    createRequestDeparture,
    getAllRequestsSent,
    getAllRequestsEarring,
    sendDepartureDocument
  } = require('../controllers/controll-requestDeparture');


// Crear solicitud
router.post('/', createRequestDeparture);

router.post('/:requestId', sendDepartureDocument);

router.get('/', getAllRequestsSent);

router.get('/', getAllRequestsEarring);


module.exports = router