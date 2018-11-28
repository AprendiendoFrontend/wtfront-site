import base from './base'
// import development from './development'
// import test from './test'
// import production from './production'
// import preproduction from './preproduction'

const STAGE = process.env.STAGE || 'development'
console.log('\n\nSTAGE:', STAGE, '\n\n') // eslint-disable-line

const envConfig = {
  //   development: development,
  //   preproduction: preproduction,
  //   production: production,
  //   test: test
}

export default class Config {
  /**
   * @constructor
   * @param {Object} deps
   * @param {String} deps.appName
   */
  constructor(deps) {
    this._config = {
      ...base,
      ...envConfig[STAGE]
    }
  }

  /**
   * @method
   * @param {String} key
   * @return {*}
   */
  get(key) {
    return this._config[key]
  }

  /**
   * @method
   * @param {String} key
   * @param {*} value
   * @return {*}
   */
  set(key, value) {
    this._config[key] = value
    return this
  }
}
