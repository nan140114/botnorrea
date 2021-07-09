const gDrive = require('../third_parties/google_drive');
const flickr = require('../third_parties/flickr_api');

const ping = () => 'Pong.';

const getById = async args => {
    const [fileId] = args;
    if (!fileId || fileId === '') return 'Missing id of file!';

    const { data: file } = await gDrive.get(fileId, gDrive.FIELD_CONTENT_LINK);
    const { webContentLink: url } = file;

    return url;
};

const searchImage = async args => {
    try {
        const text = args.join(' ');
        const response = await flickr.getFirstImage(text);
        return response;
    } catch (error) {
        return error.message;
    }
};

module.exports = {
    getById,
    ping,
    searchImage
};
