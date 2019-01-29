/**
 *
 *
 * @class Auth
 */
class Auth {
  /**
   *
   * @memberof Auth
   */
  constructor() {
    this.authenticated = false;
  }

  /**
   *
   *
   * @param {*} cb
   * @memberof Auth
   */
  login(cb) {
    this.authenticated = true;
    cb();
  }

  /**
   *
   *
   * @returns
   * @memberof Auth
   */
  isAuthenticated() {
    return this.authenticated;
  }
}

export default new Auth();
