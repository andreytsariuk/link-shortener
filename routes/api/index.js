const express = require('express');
const apiRouter = express.Router();
const { v1Router } = require('./v1');



//==================Setup routes================
apiRouter.use('/v1', v1Router);


/**
 * =================Main Export=================
 */
module.exports = { apiRouter };