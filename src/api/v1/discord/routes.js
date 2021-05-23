const router = require('express').Router();
const controller = require('./controller');

router.use('/', controller.test);

module.exports = router;
