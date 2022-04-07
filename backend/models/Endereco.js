const Sequelize = require("sequelize")
const database = require("../database/index")

const Endereco = database.define('endereco', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },    
    estado: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cidade: {
        type: Sequelize.STRING,
        allowNull: false
    },
    bairro: {
        type: Sequelize.STRING,       
        allowNull: false
    },
    
}, 
{
    timeStamps: false,
    createdAt: false,
    updatedAt: false
})

module.exports = Endereco