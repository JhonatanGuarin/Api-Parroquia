const Role = require('../models/Roles-model');

module.exports = {

    getRoles: async (req, res) => {
        try {
            const result = await Role.find()

            return res.status(200).json({ data: result })
        } catch (err) {
            return res.status(500).json({ err: err })
        }
    },

    createRoles: async (req, res) => {
        try {
            const role = new Role(req.body)
            if (!req.body.role_name) {
                return res.status(400).json({ err: 'Role name is required.' });
            }

            const result = await role.save();
            return res.status(201).json({ data: result });
        } catch (err) {
            if (err.name === 'ValidationError') {
                return res.status(400).json({ err: err.message });
            }
            return res.status(500).json({ err: err.message || err });
        }
    }

};