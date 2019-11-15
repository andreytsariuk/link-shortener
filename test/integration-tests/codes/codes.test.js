
//Require the dev-dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../../app');
const should = chai.should();
chai.use(chaiHttp);


module.exports = {
  CodesTests
};


/**
 * Main Function
 */
function CodesTests() {
  describe('Public Area', async () => {
    POST_codesWithoutBody.bind(this)();
    POST_codesWithIncorrectURLFormat.bind(this)();
    POST_codesWithIncorrectURLType.bind(this)();
    POST_codesWithProvidedURL.bind(this)();
    GET_codesWithoutURL.bind(this)();
    GET_codesWithIncorrectUrl.bind(this)();
    GET_codesWithCode.bind(this)();
    return;
  });
}



/**
 * Try to short without URL provided
 */
function POST_codesWithoutBody() {
  it('it should return and error about not provided URL',
    async () => {
      let response = await chai.request(server)
        .post('/api/v1/codes');

      response.should.have.status(400);

      response.body.code.should.be.a('string');
      response.body.description.should.be.a('string');
      return;
    });
}

/**
 * Try to short without URL provided
 */
function POST_codesWithIncorrectURLFormat() {
  it('it should return and error about not provided URL',
    async () => {
      let response = await chai.request(server)
        .post('/api/v1/codes')
        .set('content-type', 'application/json')
        .send({
          url: 'mocha_test'
        });

      response.should.have.status(400);

      response.body.code.should.be.a('string');
      response.body.description.should.be.a('string');
      return;
    });
}


/**
 * Try to short without URL provided
 */
function POST_codesWithIncorrectURLType() {
  it('it should return and error about incorrect URL',
    async () => {
      let response = await chai.request(server)
        .post('/api/v1/codes')
        .set('content-type', 'application/json')
        .send({
          url: 1
        });

      response.should.have.status(400);

      response.body.code.should.be.a('string');
      response.body.description.should.be.a('string');
      return;
    });
}

/**
 * Try to short with incorrect URL type
 */
function POST_codesWithProvidedURL() {
  it('it should return a new shorted url',
    async () => {
      let response = await chai.request(server)
        .post('/api/v1/codes')
        .set('content-type', 'application/json')
        .send({
          url: 'https://google.com'
        });

      response.should.have.status(201);

      response.body.short_url.should.be.a('string');

      this.short_url = response.body.short_url;
      return;
    });
}





/**
 * Try to  get codes without provide code
 */
function GET_codesWithoutURL() {
  it('it should return an 404 Error',
    async () => {
      let response = await chai.request(server)
        .get('/');

      response.should.have.status(200);


      response.headers['content-type'].should.be.equal('text/html; charset=utf-8');
      response.text.should.be.a('string');

      return;
    });
}



/**
 * Try to get shorted with incorrect URL
 */
function GET_codesWithIncorrectUrl() {
  it('it should return an 404 Error',
    async () => {
      let response = await chai.request(server)
        .get('/test_foo');

      response.should.have.status(404);


      response.body.code.should.be.a('string');
      response.body.description.should.be.a('string');

      return;
    });
}



/**
 * Try to get shorted with correct URL
 */
function GET_codesWithCode() {
  it('it should return an 301 status code',
    async () => {
      let [host, code] = String(this.short_url).split('3000/');
      let response = await chai.request(server)
        .get(`/${code}`);

      response.should.have.status(200);


      response.headers['content-type'].should.be.equal('text/html; charset=ISO-8859-1');
      response.text.should.be.a('string');
      return;
    });
}

