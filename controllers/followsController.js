const Follow = require('../models/Follow')
const User = require('../models/User')

module.exports = {
    createFollow: async (req,res) => {

    },
    getFollowing: async (req,res) => {

    },
    getFollowed: async (req,res) => {
        const follows = await Follow.findAll({
            attributes: {
                exclude: ['updatedAt', 'UserId'],
            },
            // include: {model: User},
            where: {
                followee_id: req.headers.userid
            }
        })
        res.json(follows)
    },
    updateFollows: async (req,res) => {

    },
    deleteFollow: async (req,res) => {

    }
}
