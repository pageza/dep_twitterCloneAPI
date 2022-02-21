const { DataTypes} = require("sequelize");
const sequelize = require('../controllers/databaseController')

const User = sequelize.define('User', {
    idUsers: DataTypes.INTEGER,
    fname: DataTypes.STRING,
    lname: DataTypes.STRING,
    uname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    Roles_idRoles: DataTypes.INTEGER
})

module.exports = User
