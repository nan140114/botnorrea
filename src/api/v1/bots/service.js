const { BOT_START, BOT_STOP, BOT_NONE } = require('../../../constants');
const discord = require('../../../chat_services/discord');
const telegram = require('../../../chat_services/telegram');

const gracefulStop = () => {
    discord.gracefulStop();
    telegram.gracefulStop();
    return BOT_STOP;
};

const init = () => {
    discord.init();
    telegram.init();
    return BOT_START;
};

const botsStatus = status => {
    if (status === BOT_START) return init();
    if (status === BOT_STOP) return gracefulStop();

    return BOT_NONE;
};

module.exports = { botsStatus };
