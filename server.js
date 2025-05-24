const express = require('express')
const UsuarioModel = require('./src/model/UsuarioModel.js')
const app = express()

app.get('/',(request, response) =>{
    return response.send("SERVIDOR ONLINE COM NODEJS + EXPRESS!")
})

app.get('/usuarios', async (request, response) =>{
    const dados = await UsuarioModel.findAll();
    return response.json(dados);
})

app.post('/usuarios', async (request, response) =>{
    const dados = request.body
    await UsuarioModel.create(dados);
    return response.json({
        message: "USUARIO CRIADO COM SUCESSO!",
        data: dados
    })
})


app.listen(3000, () =>{
    console.log("SERVIDOR EXECUTANDO NA PORTA 3000")
})