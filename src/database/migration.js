const Conexao = require('../config/conexao');
const UsuarioModel = require('../model/UsuarioModel');
const AutoresModel = require('../model/AutoresModel'); // <- Importou a nova model

Conexao.sync({ alter: true }) // Atualiza o banco sem apagar dados
  .then(() => {
    console.log("Banco sincronizado com sucesso!");
    process.exit();
  })
  .catch((err) => {
    console.error("Erro ao sincronizar:", err);
    process.exit(1);
  });