const express = require('express');
const AutoresModel = require('../model/AutoresModel.js');

const AutoresRoute = express.Router();

AutoresRoute.get('/', async (request, response) => {
    const dados = await AutoresModel.findAll();
    return response.json(dados);
});

AutoresRoute.get('/:id', async (request, response) => {
    const id = request.params.id;
    const dados = await AutoresModel.findByPk(id);
    return response.json(dados);
});

AutoresRoute.post('/', async (request, response) => {
    const dados = request.body;
    await AutoresModel.create(dados);
    return response.json({ 
        message: 'Usuário criado com sucesso!',
        data: dados
    });
});

AutoresRoute.put('/:id', async (request, response) => {
    const dados = request.body;
    const id = request.params.id;
    await AutoresModel.update(dados, {
        where: { id }
    });
    return response.json({
        message: "Usuário atualizado com sucesso!"
    });
});

AutoresRoute.delete('/:id', async (request, response) => {
    const id = request.params.id;
    await AutoresModel.destroy({
        where: { id }
    });
    return response.json({
        message: "Usuário deletado com sucesso!"
    });
});

module.exports = AutoresRoute;
