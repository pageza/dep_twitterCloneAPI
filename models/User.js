const { DataTypes} = require("sequelize");
const sequelize = require('../controllers/databaseController')

const User = sequelize.define('User', {
    id: {type: DataTypes.INTEGER, primaryKey: true},
    fname: DataTypes.STRING,
    lname: DataTypes.STRING,
    uname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
})

module.exports = User
