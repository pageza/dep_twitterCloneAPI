const User = require('../models/User')

module.exports = {
    createUser: async (req,res) => {
        const user = await User.create({
            // map form fields to sequelize create func
        })
    },
    getOneUser: async (req,res) => {
        const user = await User.findOne({
            where: { uname: req.params['uname']}
        })
        res.json({'status': 'working'})
    },
    getUsers: async (req,res) => {
        const users = await User.findAll({
            attributes: {exclude: ['id']}
        })
        res.json({'status': 'working'})
    },
    getFollowers: async (req,res) => {
        const followers = User.findAll({
            where: {}
        })
        res.json({'status': 'working'})
    },
    getFollowedUsers: async (req,res) => {
        const followedUsers = User.findAll({
            where: {}
        })
        res.json({'status': 'working'})
    }
}
