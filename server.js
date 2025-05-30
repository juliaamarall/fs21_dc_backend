const express = require('express');
const UsuarioModel = require('./src/model/UsuarioModel.js');
const AutoresRoute = require('./src/routes/AutoresRoute.js'); // ✅ importa a rota de autores

const app = express();
app.use(express.json()); // ✅ necessário para ler JSON no body

// Rota raiz
app.get('/', (request, response) => {
    return response.send("SERVIDOR ONLINE COM NODEJS + EXPRESS!");
});

// Rotas de usuários
app.get('/usuarios', async (request, response) => {
    const dados = await UsuarioModel.findAll();
    return response.json(dados);
});

app.post('/usuarios', async (request, response) => {
    const dados = request.body;
    await UsuarioModel.create(dados);
    return response.json({
        message: "USUÁRIO CRIADO COM SUCESSO!",
        data: dados
    });
});

// ✅ Usa as rotas de autores
app.use('/autores', AutoresRoute);

// Inicia o servidor
app.listen(3000, () => {
    console.log("SERVIDOR EXECUTANDO NA PORTA 3000");
});
