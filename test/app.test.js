let should = require('chai').should();
let request = require('request');

describe('This will test the api', function () {
    it('movies', function (done) {
        request('http://localhost:3001/movies/?name=tron', function (error, response, body) {
            body.should.be.a('string')
            done()
        })
    });
    // This test the tv
    it('tv', function (done) {
        request('http://localhost:3001/shows/?name=tron', function (error, response, body) {
            body.should.be.a('string')
            done()
        })
    });
    // This will test music
    it('music', function (done) {
        request('http://localhost:3001/shows/?name=acdc', function (error, response, body) {
            body.should.be.a('string')
            done()
        })
    });
    //this will test audio books
    it('audiobook', function (done) {
        request('http://localhost:3001/audiobook/?name=acdc', function (error, response, body) {
            body.should.be.a('string')
            done()
        })
    });
    // This will test ebook
    it('ebook', function (done) {
        request('http://localhost:3001/ebook/?name=acdc', function (error, response, body) {
            body.should.be.a('string')
            done()
        })
    });
    // This will test podcast
    it('podcast', function (done) {
        request('http://localhost:3001/podcast/?name=acdc', function (error, response, body) {
            body.should.be.a('string')
            done()
        })
    });
    // this will test all
    it('all', function (done) {
        request('http://localhost:3001/all/?name=acdc', function (error, response, body) {
            body.should.be.a('string')
            done()
        })
    });
})