'use strict';
const User = require('./users/user.model')

var router = require('express').Router();

router.use('/users', require('./users/user.router'));

router.use('/stories', require('./stories/story.router'));

router.use('/api/auth/me', function (req, res, next) {
  const userId = req.session.userId && Number(req.session.userId)
  User.findOne({
    where: {id: userId}
  })
    .then(user => {
      if (user.id) return res.json(user)
    })
    .catch(next)

})

module.exports = router;
