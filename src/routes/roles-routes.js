const express = require('express');
const router = express.Router();

const {
    getRoles,
    createRoles
} = require('../controllers/controll-roles');

router.get('/role', getRoles);
router.post('/role', createRoles);


module.exports = router;