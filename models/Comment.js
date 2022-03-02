const sequelize = require('../controllers/databaseController')
const { DataTypes } = require('sequelize')
const User = require('./User')
const Post = require('./Post')

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
Comment.belongsTo('Users')
Comment.belongsTo('Posts')

module.exports = Comment
