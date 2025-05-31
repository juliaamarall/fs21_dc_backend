const express = require('express');
const UsuarioModel = require('../model/UsuarioModel.js');
const UsuarioController = require('../controller/UsuarioController.js');

const UsuariosRoute = express.Router();
    // usando o controller para fazer o metodo get
UsuariosRoute.get('/usuarios', UsuarioController.listar)

UsuariosRoute.get('/usuarios/:id', UsuarioController.listarId)

UsuariosRoute.post('/usuarios', UsuarioController.criarDados)

UsuariosRoute.put('/usuarios/:id', UsuarioController.atualizarDados)

UsuariosRoute.delete('/usuarios/:id', UsuarioController.deletarDados );

module.exports = UsuariosRoute;