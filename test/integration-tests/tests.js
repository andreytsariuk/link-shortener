//=========Run on Any Env=======
const _ = require('lodash');
const previousNodeEnv = process.env.NODE_ENV;
switch (previousNodeEnv) {
case 'staging':
  process.env.NODE_ENV = 'test_staging';
  break;

default:
  process.env.NODE_ENV = 'test';
  break;
}


//Require the dependencies
const appVersion = require('../../package.json').version;

const Promise = require('bluebird');

//---------------Import Tests---------------
const {
  CodesTests
} = require('./codes');



module.exports = {
  runTests
};


/**
 * Main Function
 */
function runTests() {

  console.log(`=====================Start TESTS for version: ${appVersion}=====================`);
  before(() => clearAfterTests());
  CodesTests.bind(this)();
  after(() => clearAfterTests());
}

function clearAfterTests() {
  // there can be some code that will clear DB after tests
}





runTests();