const db = require('./databaseController')
const User = require('../models/User')

module.exports = {
    getUsers: async (req,res) => {
        db.createConnection
        const users = await User.findAll({
            attributes: {exclude: ['id']}
        })
        res.json(users)
    }
}
