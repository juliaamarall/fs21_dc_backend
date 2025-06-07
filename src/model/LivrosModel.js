const { DataTypes } = require('sequelize')
const Conexao = require('../config/conexao.js')

const LivrosModel = Conexao.define(
    "LivrosModel", 
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        titulo: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        ano_publicacao: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    }, 
    {
        tableName: 'livros'
    }
)

module.exports = LivrosModel;