const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true, match: /^[a-zA-Z0-9_]+$/ },
    email: { type: String, required: true, unique: true, match: /^\S+@\S+\.\S+$/  },
    password: { type: String, required: true, match: /^(?=.*[A-Z])(?=.*[0-9]).{8,}$/ },
    roles: { type: [String], enum: ['User', 'Admin'], default: ['User'] },
    },
    { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);