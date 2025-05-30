const { DataTypes } = require('sequelize')
const Conexao = require('../config/conexao.js')

const AutoresModel = Conexao.define(
    "AutoresModel", 
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        nacionalidade: {
            type: DataTypes.STRING,
            allowNull: false,
        },
       
       
    }, 
    {
        tableName: 'autores'
    }
)

module.exports = AutoresModel;