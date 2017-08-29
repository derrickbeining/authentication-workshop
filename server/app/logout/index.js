const logoutRouter = require('express').Router()

logoutRouter
    .post('/', (req, res, next) => {
        req.session = null;
        res.status(204).send('ha');
    })

module.exports = logoutRouter;