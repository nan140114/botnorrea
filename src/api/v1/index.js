const router = require('express').Router();

const discord = require('./discord');
const telegram = require('./telegram');

router.use('/discord', discord);
router.use('/telegram', telegram);

module.exports = router;
