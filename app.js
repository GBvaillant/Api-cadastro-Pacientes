const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const PORT = 3000
const admin = require('./routes/admin')
require('./models/Paciente')
const Paciente = mongoose.model('pacientes')

//configs

//bodyParser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
//Mongoose
mongoose.Promise = global.Promise
mongoose.connect('mongodb://127.0.0.1:27017/nutriapp').then(() => {
    console.log('Conectado ao banco de dados com sucesso!')
}).catch((err) => {
    console.log('Erro ao se conectar com o banco de dados' + err)
})

//public
app.use(express.static(path.join(__dirname, '/public')))

//rotas
app.use('/admin', admin)

app.listen(PORT, () => {
    console.log('Servidor rodando....')
})