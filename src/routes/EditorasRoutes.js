const express = require('express');
const EditorasController = require('../controller/EditorasController.js');

const EditorasRoute = express.Router();
    // usando o controller para fazer o metodo get
EditorasRoute.get('/editoras', EditorasController.listar)

EditorasRoute.get('/editoras/:id', EditorasController.listarId)

EditorasRoute.post('/editoras', EditorasController.criarDados)

EditorasRoute.put('/editoras/:id', EditorasController.atualizarDados)

EditorasRoute.delete('/editoras/:id', EditorasController.deletarDados );

module.exports = EditorasRoute;