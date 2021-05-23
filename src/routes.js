const router = require('express').Router();

const api = require('./api');

router.use('/api', api);
router.use('/test', (_req, res) => res.send({ data: 'hello world!' }));

module.exports = router;
