const User = require('../models/User')

module.exports = {
    createUser: async (req,res) => {
        const user = await User.create({
            // TODO: map form fields to sequelize create func
        })
    },
    getOneUser: async (req,res) => {
        const user = await User.findOne({
            attributes: {exclude: ['id']},
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
            // TODO: add logic to DB for getting followers of logged in User
            where: {}
        })
        res.json({'status': 'working'})
    },
    getFollowedUsers: async (req,res) => {
        const followedUsers = User.findAll({
            // TODO: add logic to DB for getting users followed by logged in User
            where: {}
        })
        res.json({'status': 'working'})
    }
}
