const express = require('express');
const appRouter = express.Router();
const { apiRouter } = require('./api');
const { codeController, indexController } = require('../controllers');


//==================Setup routes================
appRouter
  .use('/api', apiRouter)
  .get('/', indexController.get)
  .get('/:code', codeController.get);


/**
 * =================Main Export=================
 */
module.exports = { appRouter };