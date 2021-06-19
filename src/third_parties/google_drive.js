const { google } = require('googleapis');
const { GDRIVE_CREDENTIALS } = require('../constants');

const scopes = ['https://www.googleapis.com/auth/drive'];

const PERMISSION_ROLE_READER = 'reader';
const PERMISSION_TYPE_ANYONE = 'anyone';

const PUBLIC_PERMISSION = {
    role: PERMISSION_ROLE_READER,
    type: PERMISSION_TYPE_ANYONE
};

const API_VERSION = 'v3';

const FIELD_KIND = 'kind';
const FIELD_ID = 'id';
const FIELD_NAME = 'name';
const FIELD_MIMETYPE = 'mimeType';
const FIELD_CONTENT_LINK = 'webContentLink';
const FIELD_VIEW_LINK = 'webViewLink';
const FIELD_PERMISSIONS = 'permissions';
const DEFAULT_FIELDS = [
    FIELD_KIND,
    FIELD_ID,
    FIELD_NAME,
    FIELD_MIMETYPE,
    FIELD_CONTENT_LINK,
    FIELD_VIEW_LINK,
    FIELD_PERMISSIONS
].join(',');
const DEFAULT_PAGE_SIZE = 10;

const auth = new google.auth.JWT(
    GDRIVE_CREDENTIALS.client_email,
    null,
    GDRIVE_CREDENTIALS.private_key,
    scopes
);

const authOptions = {
    auth,
    version: API_VERSION
};

const drive = google.drive(authOptions);

const getAll = async (nextPage = '', fields = DEFAULT_FIELDS) => {
    const params = {
        fields: `files(${fields}), nextPageToken`,
        pageSize: DEFAULT_PAGE_SIZE
    };

    if (nextPage !== '') params.nextPageToken = nextPage;

    try {
        const {
            data: { files, nextPageToken }
        } = await drive.files.list(params);

        return {
            files,
            nextPageToken
        };
    } catch (error) {
        return new Error(error.message);
    }
};

const get = async (fileId, fields = DEFAULT_FIELDS) => {
    try {
        await drive.permissions.create({
            fileId,
            requestBody: PUBLIC_PERMISSION
        });

        const file = await drive.files.get({
            fields,
            fileId
        });

        return file;
    } catch (error) {
        return new Error(error.message);
    }
};

const remove = async fileId => {
    try {
        await drive.files.trash({ fileId });
        return { message: `${fileId} was deleted` };
    } catch (error) {
        return new Error(error.message);
    }
};

module.exports = {
    DEFAULT_FIELDS,
    FIELD_CONTENT_LINK,
    FIELD_ID,
    FIELD_KIND,
    FIELD_MIMETYPE,
    FIELD_NAME,
    FIELD_PERMISSIONS,
    FIELD_VIEW_LINK,
    get,
    getAll,
    remove
};
