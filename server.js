const express = require('express');
const asyncMigrations = require('./src/database/migration.js')
const AutoresRoute = require('./src/routes/AutoresRoute.js'); //  importa a rota de autores
const UsuariosRoute = require('./src/routes/UsuariosRoute.js');
const LivrosRoute = require('./src/routes/LivrosRoute.js');
const EditorasRoute = require('./src/routes/EditorasRoutes.js');
const PublicRoute = require('./src/routes/PublicRoute.js');
require('dotenv').config()

asyncMigrations()

const app = express();
app.use(express.json()); // necessário para ler JSON no body

app.use('/', (request, response) =>{
    return response.send("SERVIDOR ONLINE COM NODE.JS + EXPRESS")
})

app.use(PublicRoute)
//MIDDLEWARE
app.use((request, response, next) => {
    const token = request.headers.token
    try{
        jwt.verify(token, process.env.TOKEN)
        next()
    }catch(e){
        return response.status(400).send('SEM AUTORIZAÇÃO' + e)
    }


    // const token = '12334'
    // if( token == '123345'){
    //     next()
    // }else{
    //     return response.status(403).send("SEM AUTORIZAÇÃO")
    // }
})
app.use(UsuariosRoute);
// ✅ Usa as rotas de autores
app.use(AutoresRoute);

// ✅ Usa as rotas de livros
app.use(LivrosRoute);

// ✅ Usa as rotas de editoras
app.use(EditorasRoute);

// Inicia o servidor
app.listen(3000, () => {
    console.log("SERVIDOR EXECUTANDO NA PORTA 3000");
});
