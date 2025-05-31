const Conexao = require('../config/conexao');
const UsuarioModel = require('../model/UsuarioModel');
const AutoresModel = require('../model/AutoresModel'); // <- Importou a nova model

function asyncMigrations(){
  Conexao.sync({ alter: true,  logging: false }) // Atualiza o banco sem apagar dados
  .then(() => {
    console.log("Banco sincronizado com sucesso!");
    
  })
  .catch((err) => {
    console.error("Erro ao sincronizar:", err);
    process.exit(1);
  });
}

module.exports = asyncMigrations