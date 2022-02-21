// const db = require('./databaseController')
const User = require('../models/User')

module.exports = {
    getOneUser: async (req,res) => {
        // db.createConnection
        const user = await User.findOne({
            where: { uname: req.params['uname']}
        })
        res.json(user)
    },
    getUsers: async (req,res) => {
        // db.createConnection
        const users = await User.findAll({
            attributes: {exclude: ['id']}
        })
        res.json(users)
    },
    getFollowers: async (req,res) => {
        // db.createConnection
        const followers = User.findAll({
            where: {}
        })
        res.json(followers)
    },
    getFollowedUsers: async (req,res) => {
        // db.createConnection
        const followedUsers = User.findAll({
            where: {}
        })
        res.json(followedUsers)
    }
}
