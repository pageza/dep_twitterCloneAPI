const sequelize = require('../controllers/databaseController')
const { DataTypes } = require('sequelize')
const User = require('./User')
const Post = require('./Post')

const Like = sequelize.define('Like', {
    userID: {
        type: DataTypes.INTEGER
    },
    postID: {
        type: DataTypes.INTEGER
    }
})
Like.belongsTo(User)
Like.belongsTo(Post)
module.exports = Like
