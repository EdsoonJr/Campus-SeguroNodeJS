// schema/UserSchema.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    nome: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    senha: {
        type: String,
        required: true,
    },
    telefone: {
        type: String,
        required: true,
    },
    tipoUsuario: {
        type: String,
        required: true,
        enum: ['estudante', 'responsável', 'administrador'],
    },
    genero: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model('User', UserSchema);
