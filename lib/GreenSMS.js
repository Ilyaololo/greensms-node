'use strict';

class GreenSMS {
  /**
   * Initialize GreenSMS Client
   * @param {object} opts - Options
   * @param {string|null} opts.username - Username. Required when AuthToken is not passed
   * @param {string|null} opts.password - Password. Request when AuthToken is not passed
   * @param {string|null} opts.token - AuthToken. Required when Username/Password not passed
   * @param {boolean} opts.useTokenForRequests - Create Auth Token after login and use for subsequent requests
   * @param {String} opts.version - API Version to be used
   */
  constructor(opts) {
    opts = opts || {};
    const {
      username,
      password,
      token,
      useTokenForRequests,
    } = opts;
    this.token = null;

    if (token) {
      this.token = token;
    }

    if (!this.token && (!username || !password)) {
      throw new Error('Either User/Pass or Auth Token is required!');
    }

    console.log('Success 1');
  }

}

export default GreenSMS;