const express = require('express');
const router = express.Router();
const {
  createDocumentType,
  getAllDocumentTypes,
  updateDocumentTypeById,
  deleteDocumentTypeById
} = require('../controllers/controll-documentType');

router.post('/', createDocumentType);
router.get('/', getAllDocumentTypes);
router.put('/:id', updateDocumentTypeById);
router.delete('/:id', deleteDocumentTypeById);

module.exports = router;
