const { Sequelize } = require('sequelize')

const createDBConnection = new Sequelize({
        database: 'twatter',
        dialect: 'mysql',
        host: '172.17.0.2',
        port: 3306,
        username: 'root',
        password: 'supersecret'
    })
module.exports = createDBConnection

