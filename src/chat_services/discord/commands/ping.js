/* eslint-disable sort-keys */
const { ping } = require('../../../services/commands');

module.exports = {
    name: 'ping',
    description: 'Ping!',
    // eslint-disable-next-line no-unused-vars
    execute (message) {
        const reply = ping();
        message.channel.send(reply);
    }
};
