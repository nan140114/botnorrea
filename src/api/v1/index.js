const router = require('express').Router();

const bots = require('./bots');
const discord = require('./discord');
const telegram = require('./telegram');

router.use('/bots', bots);
router.use('/discord', discord);
router.use('/telegram', telegram);

module.exports = router;
