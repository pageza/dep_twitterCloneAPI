const express = require('express')
const router = express.Router()
const posts = require('../controllers/postsController')

// Create post for logged-in user
router.post('/create', (req,res, next) => {
    posts.createPost(req, res).then(next)
})
// Get posts of logged-in users following in chronological order
router.get('/', (req,res, next) => {
    posts.getAllPostsFromAllUsers(req,res).then(next)
})
// Get posts of currently viewed user
router.get('/:userID', (req,res, next) => {
    posts.getAllPostsFromOneUser(req,res).then(next)
})
// Get posts of all users except followed users for Explore
router.get('/explore', (req,res, next) => {
    posts.getExplorePosts(req,res).then(next)
})
// Get post being viewed
router.get('/:post', (req,res, next) => {
    posts.getOnePost(req,res).then(next)
})
// Update a post TODO: guard so only Post creator can edit
router.put('/update/:post', (req,res,next) => {
    posts.updatePost(req,res).then(next)
})
// Delete selected post TODO: guard so only Post creator, or Admin can delete
router.delete('/delete/:post', (req,res,next) => {
    posts.deletePost(req,res).then(next)
})
module.exports = router
