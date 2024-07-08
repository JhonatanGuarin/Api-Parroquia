const express = require('express')
const router = express.Router()

const { loginUser, registerUser } = require('../controllers/controll-auth')

//Login !
router.post('/login', loginUser)


//Registrar un usuario
router.post('/register', registerUser )


module.exports = router