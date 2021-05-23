/* eslint-disable no-undef */

const supertest = require('supertest');

const server = require('../../src/index');
const { OK } = require('../../src/constants');

describe('endpoints telegram', () => {
    it('Testing to see if Jest works', async done => {
        await supertest(server)
            .get('/api/v1/telegram')
            .expect(OK)
            .then(response => {
                expect(response).toBeTruthy();
                done();
            });
    });
});
