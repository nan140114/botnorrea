/* eslint-disable max-len */

const statusCodes = require('./statusCodes');

const NODE_ENV = (process.env.NODE_ENV || '').trim();

const HOST = '0.0.0.0';
const PORT_TEST = 0;
const PORT_DEV = 4000;
const PORT = NODE_ENV === 'test' ? PORT_TEST : PORT_DEV;

const DISCORD_TOKEN = 'NTc3NTQxMTM3OTM0MzE5NjE4.XNmjGQ.tGhXsDMvYwjHnK8j2JVCHwgG8sg';
const DISCORD_PREFIX = '/';

module.exports = {
    DISCORD_PREFIX,
    DISCORD_TOKEN,
    HOST,
    PORT,
    ...statusCodes
};
