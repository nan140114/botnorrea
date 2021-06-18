const axios = require('axios');
const {
    REMOTE_BOTNORREA_API,
    BOT_START,
    BOT_STOP,
    NODE_ENV
} = require('../constants');

const botnorreaApi = axios.create({ baseURL: REMOTE_BOTNORREA_API });

const newStatusBotsRequest = async newStatus => {
    const endpoint = `/bots/new_status?status=${newStatus}`;

    if (NODE_ENV === 'test') return false;

    try {
        await botnorreaApi.get(endpoint);
        return true;
    } catch (error) {
        console.log(error.message);
        return false;
    }
};

const startBots = async () => {
    const response = await newStatusBotsRequest(BOT_START);
    return response;
};

const stopBots = async () => {
    const response = await newStatusBotsRequest(BOT_STOP);
    return response;
};

module.exports = {
    startBots,
    stopBots
};

