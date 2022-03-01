const sequelize = require('../controllers/databaseController')
const { DataTypes} = require("sequelize");
const Post = require('./Post')
const Comment = require('./Comment')
const Like = require('./Like')
const Follow = require('./Follow')

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
User.hasMany(Post,{
    foreignKey: 'id'
})
Post.belongsTo(User)
User.hasMany(Comment, {
    foreignKey: 'id'
})
Comment.belongsTo(User)
User.hasMany(Like, {
    foreignKey: 'userID'
})
Like.belongsTo(User)
User.hasMany(Follow, {
    foreignKey: ['follower_id', 'followee_id']
})
Follow.belongsTo(User)

module.exports = User
