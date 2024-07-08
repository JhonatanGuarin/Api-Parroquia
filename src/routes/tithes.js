const express = require('express');
const router = express.Router();



const {
    createTithes,
    getAllTithes,
    getTithesById,
    updateTithesById,
    deleteTithesById
  } = require('../controllers/controll-tithes');



// Crear un nuevo diezmo
router.post('/', createTithes);

// Obtener todos los diezmos
router.get('/', getAllTithes);

// Obtener un diezmo por ID
router.get('/:id', getTithesById);

// Actualizar un diezmo por ID
router.put('/:id', updateTithesById);

// Eliminar un diezmo por ID
router.delete('/:id', deleteTithesById);

module.exports = router;
