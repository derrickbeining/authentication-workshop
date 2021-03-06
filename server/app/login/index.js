const loginRouter = require('express').Router()
const User = require('../../db').model('user')

loginRouter
  .post('/', (req, res, next) => {
    User.findOne({
      where: req.body
    })
      .then(user => {
        if (user) {
          req.session.userId = user.id;
          res.status(200).json(user)
        } else {
          res.sendStatus(401)
        }
      })
      .catch(next)
  })

module.exports = loginRouter;
