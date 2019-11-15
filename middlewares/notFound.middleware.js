const {
  request,// eslint-disable-line no-unused-vars
  response// eslint-disable-line no-unused-vars
} = require('express')();
const { ERRORS: { URL_NOT_FOUND } } = require('../constants');

/**
 * 
 * @param {request} req 
 * @param {response} res 
 * @param {function} next 
 */
module.exports = (req, res, next) => {
  const err = new Error(URL_NOT_FOUND);
  err.status = 404;
  next(err);
};