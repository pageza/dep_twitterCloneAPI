const express = require('express');
const router = express.Router();
const { Sequelize, Model } = require('sequelize')

/* GET users listing. */
router.get('/', function(req, res, next) {
  const users = User.findall()
  console.log(users.every(user => user instanceof User))
  res.send(users);
})

// TODO: Create new user

// TODO: Get logged in user
router.get('/:uname', (req,res,next) => {
  // sequelize call to db to get information of the logged in user
  console.log("this is the req ",req.params)
  res.json({
    'status': 'success'
  })
})
// TODO: Get following users
router.get('/:uname/followers', function(req, res, next) {
  // sequelize call to db to get all the users that are following the currently logged in user
})
// TODO: Get followed users
router.get( '/:uname/followed', (req,res,next) => {
  // sequelize call to db to get all the users that the currently logged in user is following.
})

module.exports = router;
