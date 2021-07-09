/* eslint-disable sort-keys */
const { searchImage } = require('../../../services/commands');

module.exports = {
    name: 'searchimage',
    description: 'Get a random image from flickr',
    // eslint-disable-next-line no-unused-vars
    async execute (message, args) {
        const reply = await searchImage(args);
        message.channel.send(reply);
    }
};
