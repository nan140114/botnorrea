/* eslint-disable curly */
/** Express */
const express = require('express');
const { HOST, PORT, SIGINT, SIGTERM } = require('./constants');
const { notFound, errorHandler } = require('./middlewares');
const routes = require('./routes');
const { startBots, stopBots } = require('./services/remote_botnorrea');

/** Discord */
const {
    init: initDiscord,
    gracefulStop: stopDiscord
} = require('./chat_services/discord');
const {
    init: initTelegram,
    gracefulStop: stopTelegraf
} = require('./chat_services/telegram');

const server = express();
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(routes);
server.use(notFound);
server.use(errorHandler);

const serverRunning = server.listen(PORT, HOST, async () => {
    console.log(`server started at ${HOST}:${PORT}`);
    const stoped = await stopBots();
    if (stoped) {
        await initDiscord();
        await initTelegram();
    }
});

const shutDown = () => {
    serverRunning.close(async () => {
        const started = await startBots();
        if (started) {
            stopTelegraf();
            stopDiscord();
        }
        console.log('Received kill signal, shutting down gracefully');
    });
};

process.once(SIGINT, shutDown);
process.once(SIGTERM, shutDown);

module.exports = server;
