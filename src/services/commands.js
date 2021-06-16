const {
    get,
    FIELD_CONTENT_LINK
} = require('../third_parties/google_drive');

const ping = () => 'Pong.';

const getById = async args => {
    const [fileId] = args;
    if (!fileId || fileId === '') return 'Missing id of file!';

    const { data: file } = await get(fileId, FIELD_CONTENT_LINK);
    const { webContentLink: url } = file;

    return url;
};

module.exports = {
    getById,
    ping
};
