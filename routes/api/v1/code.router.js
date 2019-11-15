const express = require('express');
const codeRouter = express.Router();
const { codeController } = require('../../../controllers');

/* GET users listing. */
codeRouter
  .get('/:code', codeController.get)
  .post('/', codeController.post);

module.exports = { codeRouter };
