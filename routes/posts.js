const express = require('express')
const router = express.Router()
const posts = require('../controllers/postsController')

// Create post for logged-in user
router.post('/create', (req,res) => {
    posts.createPost(req, res)
})
// Get posts of logged-in users following in chronological order
router.get('/', (req,res) => {
    posts.getAllPostsFromAllUsers(req,res)
})
// Get posts of all users except followed users for Explore
router.get('/explore', (req,res) => {
    posts.getExplorePosts(req,res)
})
// Get posts of currently viewed user
router.get('/:userID/posts', (req,res) => {
    posts.getAllPostsFromOneUser(req,res)
})
// Get post being viewed
router.get('/:post', (req,res) => {
    posts.getOnePost(req,res)
})
// Update a post TODO: guard so only Post creator can edit
router.put('/update/:post', (req,res) => {
    posts.updatePost(req,res)
})
// Delete selected post TODO: guard so only Post creator, or Admin can delete
router.delete('/delete/:post', (req,res) => {
    posts.deletePost(req,res)
})
module.exports = router
