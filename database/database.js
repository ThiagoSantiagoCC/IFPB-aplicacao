const Sequelize = require('sequelize')
const connection = new Sequelize('margaridas','root','thiago', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: '-03:00'
}) 

module.exports = connection
