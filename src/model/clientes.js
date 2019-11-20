const mongoose = require('mongoose');

const ClientesSchema = new mongoose.Schema({ 
    nome: { type: String },
    email: { type: String },
    CPF: { type: Number },
    dataNascimento: { type: Date }, // no Postman "mes/dia/ano"
    estadoCivil: { type: String },
    telefone: { type: Number },
    comprou: { type: Boolean }
}, {
    versionKey: false
})


const Clientes = mongoose.model('Clientes', ClientesSchema); //indicar que o Schema está conectado a um model

module.exports = Clientes;