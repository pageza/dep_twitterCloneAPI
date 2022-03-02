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
        console.log(req.params)
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
        console.log(posts)
        res.json(posts)
    },
    getAllPostsFromAllUsers: async (req,res) => {
        const posts = await Post.findAll()
            .then(posts => res.json(posts))
    },
    getExplorePosts: async (req,res) => {
        // First I need to find all the follows by this user
        // const followed = await Follow.findAll({
        //     where:
        // })
        // // then I need to find all query excluding those users
        // const post = await Post.findAll({
        //     where: {
        //
        //     }
        // })
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
               [Op.eq]: req.body.postID
            }
        })
            .then(res.json('Deleted'))
            .catch(err => res.json(err.errors))
        }

}
