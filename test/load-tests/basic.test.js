const uniqid = require('uniqid');

/**
 * =================Main Export=================
 */
module.exports = {
  setCustomParamsToBodyURL: setCustomParamsToBodyURL
};

function setCustomParamsToBodyURL(requestParams, context, ee, next) {
  requestParams.json.url += `?text=${uniqid()}`; 
  return next(); // MUST be called for the scenario to continue
}
