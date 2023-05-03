const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Paciente = new Schema({
    nome: {
        type: String,
        required: true
    },
    end: {
        type: String,
        required: true
    },
    sexo: {
        type: String,
        required: true
    },
    datanasc: {
        type: Date,
        required: true
    },
    altura: {
        type: Number,
        required: true
    },
    peso: {
        type: Number,
        required: true
    },
    imc: {
        type: Number,
        required: true
    },
    obj: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },

    cpf: { 
        type: Number,
        required: true
    },
    data: {
        type: Date,
        default: Date.now()
    }

})
mongoose.model("pacientes", Paciente)


