const { Sequelize } = require('sequelize')

const sequelize = new Sequelize({
    dialect: 'mysql',
    host: '172.17.0.2:3306',
    username: 'root',
    password: 'supersecret'
})

