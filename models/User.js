const sequelize = require('../controllers/databaseController')
const { DataTypes} = require("sequelize");

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    fname: {
        type:DataTypes.STRING,
        validate: {
            notEmpty: true,
            isAlpha: true,
            len: [4,15]
        }
    },
    lname: {
        type:DataTypes.STRING,
        validate: {
            notEmpty: true,
            isAlpha: true,
            len: [4,15]
        }
    },
    uname: {
        type:DataTypes.STRING,
        validate: {
            notEmpty: true,
            isAlphanumeric: true,
            len: [4,15]
        }
    },
    email: {
        type:DataTypes.STRING,
        isEmail: true,
        validate: {
            notEmpty: true
        }
    },
    password: {
        type: DataTypes.STRING,
        validate: {
            len: [12,36]
        }
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
})

module.exports = User
