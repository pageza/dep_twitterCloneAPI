const User = require('../models/User')

module.exports = {
    getOneUser: async (req,res) => {
        const user = await User.findOne({
            where: { uname: req.params['uname']}
        })
        res.json(user)
    },
    getUsers: async (req,res) => {
        const users = await User.findAll({
            attributes: {exclude: ['id']}
        })
        res.json(users)
    },
    getFollowers: async (req,res) => {
        const followers = User.findAll({
            where: {}
        })
        res.json(followers)
    },
    getFollowedUsers: async (req,res) => {
        const followedUsers = User.findAll({
            where: {}
        })
        res.json(followedUsers)
    }
}
