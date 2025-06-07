const { DataTypes } = require('sequelize')
const Conexao = require('../config/conexao.js')

const EditorasModel = Conexao.define(
    "EditorasModel", 
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
        endereco: {
            type: DataTypes.STRING,
            allowNull: false,
        },
       
       
    }, 
    {
        tableName: 'editoras'
    }
)

module.exports = EditorasModel;