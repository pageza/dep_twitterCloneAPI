const sequelize = require('../controllers/databaseController')
const { DataTypes } = require('sequelize')

const Comment = sequelize.define('Comment', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    content: {
        type: DataTypes.TEXT
    },
    userID: {
        type: DataTypes.INTEGER
    },
    postID: {
        type: DataTypes.INTEGER
    }
})

module.exports = Comment
