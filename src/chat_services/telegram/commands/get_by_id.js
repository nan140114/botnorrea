/* eslint-disable sort-keys */
const { getById } = require('../../../services/commands');

module.exports = {
    name: 'getimage',
    // eslint-disable-next-line no-unused-vars
    async execute (context, args) {
        const reply = await getById(args);
        context.reply(reply);
    }
};
