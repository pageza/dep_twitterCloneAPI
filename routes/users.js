var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
})

// TODO: Create new user
// TODO: Get logged in user
// TODO: Get following users
// TODO: Get followed users

module.exports = router;
