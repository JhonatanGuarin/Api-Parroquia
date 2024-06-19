const express = require('express');
const router = express.Router();
const {
  getAllDepartures,
  getDepartureByType
  }  = require('../controllers/controll-departure');




// Ruta para obtener todas las partidas
router.get('/', getAllDepartures);

// Ruta para buscar partidas por tipo
router.get('/tipo/:tipo',getDepartureByType);

module.exports = router;
