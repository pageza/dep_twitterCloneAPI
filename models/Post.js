const sequelize = require('../controllers/databaseController')
const { DataTypes } = require('sequelize')
const User = require('./User')

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

module.exports = Post
