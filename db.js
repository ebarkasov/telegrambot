const {Sequelize} = require('sequelize');

module.exports = new Sequelize(
    'telega_bot',
    'root',
    'root',
    {
        host: '188.246.229.102',
        port: '6432',
        dialect: 'postgres'
    }
)
