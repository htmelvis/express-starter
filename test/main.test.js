import supertest from 'supertest';
import app from '../app.js';
import chai from 'chai';
const expect = chai.expect;
// use request to make basic http requests
const request = supertest(app);
// agent will have persistent cookies
// use this for session-dependent end-to-end tests
const agent = supertest.agent(app);

// Reminder: Mocha recommends against using fat-arrow functions!

describe('Unit tests', function() {

});

describe('Server integration tests', function() {

  describe('GET "/"', function() {
    let serverResponse = {};
    before( function(done) {
      request.get('/')
        .end( (err,res) => {
          serverResponse = res;
          done();
        });
    });
    it('should have status 200', function(done) {
        expect(serverResponse.statusCode).to.equal(200);
        done();
    });
  });

});
