const express = require('express')
const path = require('path')
const rwJSON = require('./rwJSON')

const app = express()
const PORTA = '3000'
const baseDIR = pathjoin(__dirname, 'templates')
const cadastro = 'pessoas.json'

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.get('/', (req, res)=>res.sendFile(`${baseDIR}/index.html`))
app.get('/cadastrar', (req, res)=>res.sendFile(`${baseDIR}/cadastrar.html`))
app.get('/registros', (req, res)=>{
    let dados;
    dados = rwJSON.lerJSON(cadastro)
    dados = rwJSON.converterJSON_obj(dados)
    res.json(dados)
})
app.post('/cadastrar', (req, res)=>{
    let dado = req.body
    let dados = rwJSON.lerJSON(cadastro)
    dados=rwJSON.converterJSON_obj(dados)
    dados.push(dado)
    dados=rwJSON.converterObj_JSON(dados)
    rwJSON.salvarJSON(dados, cadastro)
    res.json(dado)
})

app.listen(PORTA, ()=>console.log(`Servidor rodando em: http://10.54.46.25:${PORTA}`))