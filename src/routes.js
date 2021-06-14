const router = require('express').Router();

const api = require('./api');

router.use('/api', api);
router.use('/', (_req, res) => res.send({ data: 'botnorreaa online!' }));

module.exports = router;
