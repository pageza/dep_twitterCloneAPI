const sequelize = require('../controllers/databaseController')
const { Datatypes } = require('sequelize')

const Follow = sequelize.define('Follow', {
    follower_id: {
        type: Datatypes.INTEGER,
        primaryKey: true
    },
    followee_id: {
        type: Datatypes.INTEGER,
        primaryKey: true
    }
})
module.exports = Follow
