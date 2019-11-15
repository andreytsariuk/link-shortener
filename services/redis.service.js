const redis = require('redis');
const config = require('config');
const _ = require('lodash');
const bluebird = require('bluebird');
bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

class RedisService {

  constructor() {
    this.client = redis.createClient(
      _.merge(
        config.get('REDIS.config'), {
          retry_strategy: this.retryStrategy.bind(this)
        }
      ))
      .on('connect', this.onConnected.bind(this))
      .on('error', this.onError.bind(this));
  }


  /**
 * Log on Connection
 * @param {string} name
 */
  onConnected() {
    console.log(`$REDIS_CONNECTED_${process.pid} `);
  }

  /**
   * Log when Error
   * @param {string} name
   */
  onError() {
    console.log(`REDIS_ERROR_${process.pid}`, err);
  }

  /**
   * 
   * @param {object} options 
   */
  retryStrategy(options) {
    if (options.error && options.error.code === 'ECONNREFUSED') {
      // End reconnecting on a specific error and flush all commands with
      // a individual error
      return new Error('The Redis server refused the connection');
    }
    if (options.total_retry_time > 1000 * 60 * 60) {
      // End reconnecting after a specific timeout and flush all commands
      // with a individual error
      return new Error('Retry time exhausted');
    }
    if (options.attempt > 10) {
      // End reconnecting with built in error
      return undefined;
    }
    // reconnect after
    return Math.min(options.attempt * 100, 3000);
  }
}



module.exports = new RedisService();