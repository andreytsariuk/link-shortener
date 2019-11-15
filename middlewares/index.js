
/**
 * =================Main Export=================
 */
module.exports = {
  errorsMiddleware: require('./errors.middleware'),
  versionMiddleware: require('./version.middleware'),
  notFoundMiddleware: require('./notFound.middleware')
};