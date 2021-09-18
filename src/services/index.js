const users = require('./users/users.routes')

module.exports = (app) => {
    app.use('/users', users)
}