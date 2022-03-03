// noinspection JSCheckFunctionSignatures

const { Op } = require('sequelize')
const Post = require('../models/Post')
const Follow = require('../models/Follow')

module.exports = {
    createPost: async (req,res) => {
        const post = await Post.create( {
            postTitle: req.body.title,
            postContent: req.body.content,
            postImage: req.body.image,
            userID: req.body.user
        })
            .then(post => res.json(post))
            .catch(err => res.json(err.errors))
    },
    getOnePost: async (req,res) => {
        const post = await Post.findOne({
            where: {
                id: req.params['post']
            }
        })
        res.json(post)
    },
    getAllPostsFromOneUser: async (req,res) => {
        const posts = await Post.findAll({
            where: {
                userID: req.params['userID']
            }
        })
        res.json(posts)
    },
    getAllPostsFromAllUsers: async (req,res) => {
        const posts = await Post.findAll()
            .then(posts => res.json(posts))
    },
    getExplorePosts: async (req,res) => {
        // TODO: refactor to pull userID for logged-in user
        let userID = req.headers.userid
        let followedList = []

        const followed = await Follow.findAll({
            attributes: { exclude: ['updatedAt','UserId']},
            where: { followee_id: userID }
        })
            .then((followed) => {
                for (let i=0; i< followed.length; i++) {
                    followedList.push(followed[i].dataValues.follower_id)
                }
            })
        // then I need to find all query excluding those users and the logged-in user
        const posts = await Post.findAll({
            where: {
                userID: {
                    [Op.ne]: userID,
                    [Op.notIn]: followedList
                }

            }
        })
        res.json(posts)
    },
    updatePost: async (req,res) => {
        const post = await Post.update({
            postContent: req.body.content
        },{
            where: {
                postID: req.body.postID
            }
        })
            .then(post => res.json(post))
            .catch(err => res.json(err.errors))

    },
    deletePost: async (req,res) => {
        await Post.destroy({
            where: {
               id: {[Op.eq]: req.body.postID}
            }
        })
            .then(res.json('Deleted'))
            .catch(err => res.json(err.errors))
        }

}
