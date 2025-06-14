const express = require('express')
const UsuarioModel = require('../model/UsuarioModel.js')
const jwt = require('jsonwebtoken')
const PublicRoute = express.Router()
require('dotenv').config()
PublicRoute.post('/login', async (request, response) =>{
    const body = request.body;
    const usuario = await UsuarioModel.findOne({
        where:{
            email: body.email,
            senha: body.senha
        }
    })
    if(usuario){
        const dados = {
            id: usuario.id,
            nome: usuario.nome,
            email: usuario.email
        }

        const token = await jwt.sign(dados, process.env.TOKEN)
        return response.json({
            token: token,
            message: 'USUARIO LOGADO COM SUCESSO'
        })
    } else {
        return response.json({
            message: 'LOGIN OU SENHA INCORRETO'
        })
    }

})

module.exports = PublicRoute