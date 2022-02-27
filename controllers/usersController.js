const User = require('../models/User')

module.exports = {
    createUser: async (req,res) => {
        const user = await User.create({
            uname: req.body.uname,
            fname: req.body.fname,
            lname: req.body.lname,
            email: req.body.email,
            password: req.body.password
        })
            .then((result)=>{
                if(result) res.json(results)
            })
            .catch((err)=>{
                if(err.errors) res.json(err.errors)
            })


    },
    getOneUser: async (req,res) => {
        const user = await User.findOne({
            where: { uname: req.params['uname']}
        })
        res.json(user)
    },
    getUsers: async (req,res) => {
        const users = await User.findAll()
        res.json(users)
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
