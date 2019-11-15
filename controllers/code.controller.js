const {
  request, // eslint-disable-line no-unused-vars
  response // eslint-disable-line no-unused-vars
} = require('express')();
const { RedisService } = require('../services');
const {
  ERRORS: {
    SHORTED_URL_WAS_NOT_FOUND,
    EMPTY_URL_FOR_SHORTING,
    INCORRECT_URL_PROVIDED
  },
  BASIC: {
    URL_REGEXP
  } } = require('../constants');
const uniqid = require('uniqid');
const config = require('config');

module.exports = class {


  /**
    * This function creates the short variant of provide URL and saves it to the DB
    * 
    * 
    * @param {request} req 
    * @param {response} res 
    * @param {function} next 
    */
  static post(req, res, next) {
    const { url } = req.body;
    if (!url)
      return next(new Error(EMPTY_URL_FOR_SHORTING));
    if (!URL_REGEXP.test(url))
      return next(new Error(INCORRECT_URL_PROVIDED));


    const code = uniqid();

    return RedisService
      .client
      .multi()
      .set(code, url)
      .execAsync()
      .then(() => res.status(201).send({
        short_url: `${config.get('WEB_URL')}/${code}`
      }))
      .catch(next);
  }


  /**
    * This function redirects user by provided code in link. 
    * In case URL was not found the function will return Error
    * 
    * 
    * @param {request} req 
    * @param {response} res 
    * @param {function} next 
    */
  static get(req, res, next) {
    const { code } = req.params;

    return RedisService
      .client
      .multi()
      .get(code)
      .execAsync()
      .then(res1 => {
        const [url] = res1;
        if (!url || url === undefined || url === null) {
          throw new Error(SHORTED_URL_WAS_NOT_FOUND);
        } else {
          return res.redirect(url);
        }
      })
      .catch(next);
  }

};