const sequelize = require('../controllers/databaseController')
const { DataTypes } = require('sequelize')
const User = require('./User')

const Follow = sequelize.define('Follow', {
    follower_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    followee_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    }
})
Follow.belongsTo(User)

module.exports = Follow
