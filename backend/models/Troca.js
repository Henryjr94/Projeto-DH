const Sequelize = require("sequelize")
const database = require("../database/index")
const Cliente = require('./Cliente')
const Livro = require('./livro')

const Troca = database.define('troca', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    type: {
        type: Sequelize.STRING,
        allowNull: false
    }

}, 
{
    timeStamps: false,
    createdAt: false,
    updatedAt: false
})

Troca.belongsTo (Cliente, {
    constraint: true,
    foreignKey: "cliente_id"
})

Troca.belongsTo (Livro, {
    constraint: true,
    foreignKey: "livro_id"
})

module.exports = Troca