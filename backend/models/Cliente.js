const Sequelize = require("sequelize")
const database = require("../database/index")
const Endereco = require('./Endereco')

const Cliente = database.define('cliente', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },

    email: {
        type: Sequelize.STRING,
        allowNull: true
    }

}, 
{
    timeStamps: false,
    createdAt: false,
    updatedAt: false
})

Cliente.belongsTo (Endereco, {
    constraint: true,
    foreignKey: "endereco_id"
})

module.exports = Cliente