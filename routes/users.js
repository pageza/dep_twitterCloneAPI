const express = require('express');
const router = express.Router();
const users = require('../controllers/usersController')

/* GET users listing. */
router.get('/', function(req, res) {
      users.getUsers(req,res)
})

// TODO: Create new user

// TODO: Get logged in user
router.get('/:uname', (req,res) => {
  // sequelize call to db to get information of the logged in user
    users.getOneUser(req,res)
})
// TODO: Get following users
router.get('/followers/:uname', function(req, res) {
  // sequelize call to db to get all the users that are following the currently logged in user
    users.getFollowers(req,res)
})
// TODO: Get followed users
router.get( '/followed/:uname', (req,res) => {
  // sequelize call to db to get all the users that the currently logged in user is following.
    users.getFollowedUsers(req,res)
})

module.exports = router;
