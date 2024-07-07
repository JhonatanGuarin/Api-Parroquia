const mongoose = require('mongoose');


const RolesSchema = new mongoose.Schema({
    role_name: {
        type: String,
        required: true,
    }
});

const Role = mongoose.model('Role', RolesSchema);

module.exports = Role;