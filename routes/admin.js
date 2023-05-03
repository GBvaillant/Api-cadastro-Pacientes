const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
require('../models/Paciente')
const Paciente = mongoose.model('pacientes')    

router.get('/', (req, res) => {
})
router.get('/pacientes', (req, res) => {
    Paciente.find().lean().then(() => {
        res.status()
    }).catch((err) => {
        console.log('erro' + err)
    })

})

router.get('/pacientes/registrar', (req, res) => {
    res.render('./admin/addpaciente')
})

router.post('/pacientes/add', (req, res) => {
    const novoPaciente = {
        nome: req.body.nome,
        email: req.body.email,
        end: req.body.end,
        datanasc: req.body.datanasc,
        sexo: req.body.sexo,
        altura: req.body.altura,
        peso: req.body.peso,
        cpf: req.body.cpf,
        imc: req.body.imc,
        obj: req.body.obj
    }

    new Paciente(novoPaciente).save().then(() => {
        res.status()
    }).catch((err) => {
        console.log('houve um erro' + err)
    })

})

router.get('/pacientes/detalhe/:id', (req, res) => {
    Paciente.findOne({ _id: req.params.id }).lean().then(() => {
    }).catch((err) => {
        console.log('houve um erro: ' + err)
    })
})

router.get('/pacientes/editar/:id', (req, res) => {
    Paciente.findOne({ _id: req.params.id }).lean().then(() => {
        res.status()
    }).catch((err) => {
        console.log('houver um erro ' + err)
    })

})

module.exports = router