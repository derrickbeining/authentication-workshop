const signupRouter = require('express').Router()
const User = require('../../db').model('user')

signupRouter
  .post('/', (req, res, next) => {
    User.findOrCreate({
      where: req.body
    })
      .then(user => user[ 0 ])
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

module.exports = signupRouter;
