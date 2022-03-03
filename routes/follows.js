const express = require('express')
const router = express.Router()
const follows = require('../controllers/followsController')

router.get('', (req,res) => {
    follows.getFollowed(req,res)
})

module.exports = router
