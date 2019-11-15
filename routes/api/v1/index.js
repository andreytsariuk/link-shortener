const express = require('express');
const v1Router = express.Router();
const { codeRouter } = require('./code.router');


//==================Setup routes================
v1Router.use('/codes', codeRouter);


/**
 * =================Main Export=================
 */
module.exports = { v1Router };
