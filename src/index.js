/* eslint-disable curly */
/** Express */
const express = require('express');
const { HOST, PORT } = require('./constants');
const { notFound, errorHandler } = require('./middlewares');
const routes = require('./routes');

/** Discord */
const { init } = require('./services/discord');

const server = express();
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(routes);
server.use(notFound);
server.use(errorHandler);

server.listen(PORT, HOST, () => {
    console.log(`server started at ${HOST}:${PORT}`);
    init();
});


module.exports = server;
