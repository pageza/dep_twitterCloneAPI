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
            .then((user)=>{
                if(user) res.json(user)
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
    updateUser: async (req,res) => {

   },
    deleteUser:async (req,res) => {

    }
}
