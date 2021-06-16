/* eslint-disable sort-keys */
const { ping } = require('../../../services/commands');

module.exports = {
    name: 'ping',
    // eslint-disable-next-line no-unused-vars
    execute (context) {
        const reply = ping();
        context.reply(reply);
    }
};
