const { google } = require('googleapis');

const credentials = require('../constants/botnorrea_credentials.json');

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

const auth = new google.auth.JWT(
    credentials.client_email,
    null,
    credentials.private_key,
    scopes
);

const auhtOptions = {
    auth,
    version: API_VERSION
};

const drive = google.drive(auhtOptions);

const get = async (fileId, fields = DEFAULT_FIELDS) => {
    await drive.permissions.create({
        fileId,
        requestBody: PUBLIC_PERMISSION
    });

    const file = await drive.files.get({
        fields,
        fileId
    });

    return file;
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
    get
};
