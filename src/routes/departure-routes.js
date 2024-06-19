const express = require('express');
const router = express.Router();
const {
    getAllPartidas,
    getPartidasByType
  }  = require('../controllers/controll-departure');




// Ruta para obtener todas las partidas
router.get('/', getAllPartidas);

// Ruta para buscar partidas por tipo
router.get('/tipo/:tipo',getPartidasByType);

module.exports = router;
