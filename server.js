const express = require('express');
const asyncMigrations = require('./src/database/migration.js')
const UsuarioModel = require('./src/model/UsuarioModel.js');
const AutoresRoute = require('./src/routes/AutoresRoute.js'); //  importa a rota de autores
const UsuariosRoute = require('./src/routes/UsuariosRoute.js');

asyncMigrations()

const app = express();
app.use(express.json()); // necessário para ler JSON no body

app.use(UsuariosRoute);
// ✅ Usa as rotas de autores
app.use('/autores', AutoresRoute);

// Inicia o servidor
app.listen(3000, () => {
    console.log("SERVIDOR EXECUTANDO NA PORTA 3000");
});
