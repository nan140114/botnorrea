const axios = require('axios');
const { FLICKR_API, FLICKR_KEY } = require('../constants');

const defaultParams = {
    'api_key': FLICKR_KEY,
    format: 'json'
};

const flickrApi = axios.create({ baseURL: `${FLICKR_API}/services/rest` });

const extractJSON = text => {
    const prefix = 'jsonFlickrApi';
    const blank = '';
    const startText = 0;
    const moveTextCursor = 1;

    let response = text.replace(prefix, blank);
    response = response.slice(startText + moveTextCursor);
    response = response.slice(startText, response.length - moveTextCursor);
    return JSON.parse(response);
};

const search = async text => {
    const params = {
        ...defaultParams,
        method: 'flickr.photos.search',
        text
    };
    const { data } = await flickrApi.get('', { params });
    const response = extractJSON(data);
    return response;
};

const getImages = async imageId => {
    const params = {
        ...defaultParams,
        method: 'flickr.photos.getSizes',
        'photo_id': imageId
    };
    const { data } = await flickrApi.get('', { params });
    const response = extractJSON(data);
    return response;
};

const getFirstImage = async text => {
    const medium = 'Medium';
    const { photos: { photo: pictures } } = await search(text);
    const [{ id: imageId }] = pictures;
    const { sizes: { size: images } } = await getImages(imageId);
    const [{ source }] = images.filter(({ label }) => label === medium);
    return source;
};

module.exports = {
    getFirstImage,
    getImages,
    search
};
