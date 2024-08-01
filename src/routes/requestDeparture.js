const express = require('express')
const router = express.Router()

const {
    createRequestDeparture,
    getAllRequestsSent,
    getAllRequestsEarring,
    sendDepartureDocument,
    deleteRequestById
  } = require('../controllers/controll-requestDeparture');


// Crear solicitud
router.post('/', createRequestDeparture);

router.post('/:requestId', sendDepartureDocument);

router.get('/', getAllRequestsSent);

router.get('/', getAllRequestsEarring);

router.delete('/:id', deleteRequestById);

module.exports = router