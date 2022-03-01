const sequelize = require('../controllers/databaseController')
const { DataTypes } = require('sequelize')

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
module.exports = Follow
