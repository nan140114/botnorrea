/* eslint-disable sort-keys */

module.exports = {
    name: 'ping',
    description: 'Ping!',
    // eslint-disable-next-line no-unused-vars
    execute (message, _args) {
        message.channel.send('Pong.');
    }
};
