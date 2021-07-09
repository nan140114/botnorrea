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

const FLICKR_API = 'https://www.flickr.com';
const FLICKR_KEY = '1ae1699a7523a47c91ab02c4506b5872';
const FLICKR_SECRET = '477a71f7138eefa1';

const GDRIVE_CREDENTIALS = NODE_ENV === 'test'
    ? require('./__mocks__/botnorrea_credentials.json')
    : require('./botnorrea_credentials.json');
const FIREBASE_CREDENTIALS = NODE_ENV === 'test'
    ? require('./__mocks__/botnorrea-firebase-adminsdk.json')
    : require('./botnorrea-firebase-adminsdk.json');

const REMOTE_BOTNORREA = 'https://botnorrea.onrender.com';
const REMOTE_API_V1 = 'v1';
const REMOTE_BOTNORREA_API = `${REMOTE_BOTNORREA}/api/${REMOTE_API_V1}`;

const BOT_NONE = 'none';
const BOT_START = 'start';
const BOT_STOP = 'stop';

module.exports = {
    BOT_NONE,
    BOT_PREFIX,
    BOT_START,
    BOT_STOP,
    DISCORD_APPLICATION_ID,
    DISCORD_PUBLIC_KEY,
    DISCORD_TOKEN,
    FIREBASE_CREDENTIALS,
    FLICKR_API,
    FLICKR_KEY,
    FLICKR_SECRET,
    GDRIVE_CREDENTIALS,
    HOST,
    NODE_ENV,
    PORT,
    REMOTE_BOTNORREA_API,
    SIGINT,
    SIGTERM,
    TELEGRAM_TOKEN,
    ...statusCodes
};
