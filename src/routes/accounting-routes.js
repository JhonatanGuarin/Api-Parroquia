const express = require('express');
const router = express.Router();
const {
    getAllAccounting,
    getAccountingByType
  }  = require('../controllers/controll-accounting');




// Ruta para obtener todas las partidas
router.get('/', getAllAccounting);

// Ruta para buscar partidas por tipo
router.get('/:tipo',getAccountingByType);

module.exports = router;