const express = require('express');
const router = express.Router();

const {
  getDocuments,
  createDocumentType
} = require('../controllers/controll-documentType');

router.post('/documentType', createDocumentType);
router.get('/documentType', getDocuments);


module.exports = router;
