const router = require('express').Router();
const controller = require('./controller');

router.use('/new_status', controller.botsStatus);

module.exports = router;
