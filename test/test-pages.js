var expect = require('chai').expect;
const request = require("request-promise");

describe('Main test case', () => {
    describe('homepage', () => {
        it('get homepage', function (done) {
            request({
                method: "GET",
                uri: 'http://localhost:3002/'
            })
                .then(response => {
                    expect(response).to.equal('ok');
                    done();
                })
                .catch(done);
        });
        it('post value', function (done) {
            request({
                method: "POST",
                uri: 'http://localhost:3002/value',
                body: {name: "richa"},
                json: true
            })
                .then(response => {
                    expect(response).to.deep.equal({"name": "richa"});
                    done();
                }).catch(done);
        });
    })
});

