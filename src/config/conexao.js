// CommonJS
// const NomeLib = require('nome_lib')
// Module
// import NomeLib from 'nome_lib'.
const { Sequelize } = require('sequelize');
require('dotenv').config()
const Conexao = new Sequelize({
    dialect: process.env.DIALECT,
    host: process.env.HOST_DB,
    port: process.env.PORT_DB,
    username: process.env.USERNAME_DB,
    password: process.env.PROSSWORD_DB,
    database: process.env.DATABASE_DB
})

module.exports = Conexao;