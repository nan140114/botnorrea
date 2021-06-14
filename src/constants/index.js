/* eslint-disable max-len */

const statusCodes = require('./statusCodes');

const NODE_ENV = (process.env.NODE_ENV || '').trim();

const HOST = '0.0.0.0';
const PORT_TEST = 0;
const PORT_DEV = 4000;
const PORT = NODE_ENV === 'test' ? PORT_TEST : PORT_DEV;

const SIGINT = 'SIGINT';
const SIGTERM = 'SIGTERM';

const BOT_PREFIX = '/';

const DISCORD_APPLICATION_ID = '577541137934319618';
const DISCORD_PUBLIC_KEY = '31c945a6b3a36218a09d3ba7bc0036980011a2f13179fe472066d0b4dbd3495f';
const DISCORD_TOKEN = [
    'NTc3NTQxMTM3OTM0MzE5NjE4',
    'XNmjGQ',
    'hq2M8BsR0mjywjiLIDksD4jEvs4'
];

const TELEGRAM_TOKEN = '1674935871:AAG0uYoBkCjtZjNP04fMV7nlmqAGZZOhBSs';

module.exports = {
    BOT_PREFIX,
    DISCORD_APPLICATION_ID,
    DISCORD_PUBLIC_KEY,
    DISCORD_TOKEN,
    HOST,
    PORT,
    SIGINT,
    SIGTERM,
    TELEGRAM_TOKEN,
    ...statusCodes
};
