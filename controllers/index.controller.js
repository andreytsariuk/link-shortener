const {
  request, // eslint-disable-line no-unused-vars
  response // eslint-disable-line no-unused-vars
} = require('express')();


module.exports = class {

  /**
   * 
   * @param {request} req 
   * @param {response} res 
   * @param {function} next 
   */
  static get(req, res, next) {
    return res.render('index', { title: 'Link Shortener' });
  }

};