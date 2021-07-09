/* eslint-disable sort-keys */
const { searchImage } = require('../../../services/commands');

module.exports = {
    name: 'searchimage',
    // eslint-disable-next-line no-unused-vars
    async execute (context, args) {
        const reply = await searchImage(args);
        context.reply(reply);
    }
};
