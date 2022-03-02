// TODO: export this to shorten the app.js file

const usersRouter = require('./users');
const postsRouter = require('./posts');
const commentsRouter = require('./comments');
const likesRouter = require('./likes')
const followsRouter = require('./follows')
const app = require('../app')

module.exports = routes = routes => {
    app.use('/api/user', usersRouter),
    app.use('/api/posts', postsRouter),
    app.use('/api/comments', commentsRouter),
    app.use('/api/likes', likesRouter),
    app.use('/api/follows', followsRouter)
}
