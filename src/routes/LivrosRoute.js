const express = require('express');
const UsuarioModel = require('../model/UsuarioModel.js');
const LivrosController = require('../controller/LivrosController.js');

const LivrosRoute = express.Router();
    // usando o controller para fazer o metodo get
LivrosRoute.get('/livros', LivrosController.listar)

LivrosRoute.get('/livros/:id', LivrosController.listarId)

LivrosRoute.post('/livros', LivrosController.criarDados)

LivrosRoute.put('/livros/:id', LivrosController.atualizarDados)

LivrosRoute.delete('/livros/:id', LivrosController.deletarDados );

module.exports = LivrosRoute;