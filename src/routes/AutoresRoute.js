const express = require('express');
const UsuarioModel = require('../model/UsuarioModel.js');
const AutoresController = require('../controller/AutoresController.js');

const AutoresRoute = express.Router();
    // usando o controller para fazer o metodo get
AutoresRoute.get('/autores', AutoresController.listar)

AutoresRoute.get('/autores/:id', AutoresController.listarId)

AutoresRoute.post('/autores', AutoresController.criarDados)

AutoresRoute.put('/autores/:id', AutoresController.atualizarDados)

AutoresRoute.delete('/autores/:id', AutoresController.deletarDados );

module.exports = AutoresRoute;