const get = require('lodash/get');
const { INTERNAL_SERVER_ERROR, NOT_FOUND } = require('../constants');

const notFound = (_req, _res, next) => {
    const err = new Error('Not Found');
    err.status = NOT_FOUND;
    next(err);
};

// eslint-disable-next-line no-unused-vars
const errorHandler = (err, _req, res, _next) => {
    const statusCode = get(err, 'response.status', err.status);
    const errorMessage = get(err, 'response.data.message', err.message);

    return res
        .status(statusCode || INTERNAL_SERVER_ERROR)
        .send({ error: errorMessage });
};

module.exports = {
    errorHandler,
    notFound
};
