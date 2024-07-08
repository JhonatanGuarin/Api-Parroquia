const jwt = require('jsonwebtoken')

const tokenSign = async (user) => { //TODO: Genera Token
    return jwt.sign(
        {
            _id: user._id, //TODO: <---
            role: user.role
        }, //TODO: Payload ! Carga útil
        process.env.JWT_SECRET, //TODO ENV 
        {
            expiresIn: "2h", //TODO tiempo de vida
        }
    );
}

const verifyToken = async (token) => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET)
    } catch (e) {
        return null
    }
}

//Verificar que el token sea valido y correcto
const decodeSign = (token) => { 
    return jwt.decode(token, null)
}



module.exports = { tokenSign, decodeSign, verifyToken }