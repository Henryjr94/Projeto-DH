const Sequelize = require('sequelize')

const sequelize = new Sequelize("livraria", "root", "", {
    dialect: "mysql",
    host: "localhost"
})

module.exports = sequelize