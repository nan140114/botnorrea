const service = require('./service');
const { INTERNAL_SERVER_ERROR } = require('../../../constants');

const botsStatus = (req, res) => {
    try {
        const { query: { status } } = req;
        const botStatus = service.botsStatus(status);
        res.send({ newBotState: botStatus });
    } catch (error) {
        const { message } = error;
        res
            .status(INTERNAL_SERVER_ERROR)
            .send({ error: message });
    }
};

module.exports = { botsStatus };
