/* eslint-disable sort-keys */
const { getById } = require('../../../services/commands');

module.exports = {
    name: 'getimage',
    description: 'Get a random image from google drive!',
    // eslint-disable-next-line no-unused-vars
    async execute (message, args) {
        const reply = await getById(args);
        message.channel.send(reply);
    }
};
