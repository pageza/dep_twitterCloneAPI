const sequelize = require('../controllers/databaseController')
const { DataTypes } = require('sequelize')

const Like = sequelize.define('Like', {
    userID: {
        type: DataTypes.INTEGER
    },
    postID: {
        type: DataTypes.INTEGER
    }
})

module.exports = Like
