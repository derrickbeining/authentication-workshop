const logoutRouter = require('express').Router()

logoutRouter
    .post('/', (req, res, next) => {
        req.session.destroy();
        res.sendStatus(204);
    })

module.exports = logoutRouter;
