const User = require('../models/user');
const { encrypt, compare } = require('../helpers/handleBcrypt')
const { tokenSign } = require('../helpers/gerate-token')


module.exports = {

    // Controlador para crear un nuevo usuario
    registerUser: async (req, res) => {
        try {
        const { name, lastName, birthdate, documentNumber, typeDocument, mail, password, role } = req.body;
    
        // Verificar si el correo electrónico ya está registrado
        const existingUser = await User.findOne({ mail });
        if (existingUser) {
            return res.status(400).json({ error: 'El correo electrónico ya está registrado' });
        }
    
        // Verificar si la fecha de nacimiento es mayor a la fecha actual
        const currentDate = new Date();
        if (new Date(birthdate) > currentDate) {
            return res.status(400).json({ error: 'La fecha de nacimiento no puede ser mayor a la fecha actual' });
        }
    
        // Establecer el valor predeterminado del rol si no se proporciona
        const defaultRole = 'Usuario';
        const userRole = role || defaultRole;
    
        //Encriptación contraseña
        const passwordHash = await encrypt(password)

        const user = new User({
            name,
            lastName,
            birthdate,
            documentNumber,
            typeDocument,
            mail,
            password: passwordHash,  // Guardamos la contraseña hasheada
            role: userRole
        });
    
        const result = await user.save();
    
        return res.status(201).json({ data: result });
        } catch (err) {
        return res.status(500).json({ error: err.message });
        }
    },

    loginUser: async (req, res) => {
        try {
            const { mail, password } = req.body;
    
            // Validación básica de entrada
            if (!mail || !password) {
                return res.status(400).json({ error: 'Email and password are required' });
            }
    
            const user = await User.findOne({ mail });
    
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }
    
            const checkPassword = await compare(password, user.password);
    
            if (!checkPassword) {
                return res.status(401).json({ error: 'Invalid password' });
            }
    
            // JWT 
            const tokenSession = await tokenSign(user);
    
            // Omitir la contraseña en la respuesta
            const userResponse = user.toObject();
            delete userResponse.password;
    
            return res.status(200).json({
                message: 'Login successful',
                data: userResponse,
                tokenSession
            });
    
        } catch (err) {
            console.error('Login error:', err);
            return res.status(500).json({ error: 'Internal server error' });
        }
    }

}