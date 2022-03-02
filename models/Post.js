const sequelize = require('../controllers/databaseController')
const { DataTypes } = require('sequelize')
const User = require('./User')
const Comment = require('./Comment')
const Like = require('./Like')

const Post = sequelize.define('Post', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    postTitle: {
        type: DataTypes.STRING,
    },
    postContent: {
         type: DataTypes.TEXT,
    },
    postImage: {
        type: DataTypes.STRING,
        allowNull: true
    },
    userID: {
        type: DataTypes.INTEGER
    }
})
Post.hasMany(Comment, {
    foreignKey: 'id'
})
Post.hasMany(Like, {
    foreignKey: 'postID'
})
// Post.belongsTo(User)
// Comment.belongsTo(Post)

module.exports = Post
