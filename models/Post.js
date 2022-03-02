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
Comment.belongsTo(Post)
Post.hasMany(Like, {
    foreignKey: 'postID'
})
Like.belongsTo(Post)


module.exports = Post
