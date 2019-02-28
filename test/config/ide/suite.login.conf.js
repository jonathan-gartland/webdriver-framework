// import baseConf
// import { merge } from  'deepmerge';
var baseConf = require('../base.conf.js');
var merge = require('deepmerge');

// have main config file as default but overwrite environment specific information
exports.config = merge(baseConf.config, {

  // ==================
  // Specify Test Files
  // ==================
  // Define which test specs should run. The pattern is relative to the directory
  // from which `WebdriverIO` was called. Notice that, if you are calling `wdio` from an
  // NPM script (see https://docs.npmjs.com/cli/run-script) then the current working
  // directory is where your package.json resides, so `wdio` will be called from there.
  //
  specs: [
    //'./test/specs/*.js',
    './test/specs/ide/login/login.spec.js'
  ],
  // Patterns to exclude.
  exclude: [
    // './test/specs/file-to-exclude.js'
  ],



  baseUrl: 'https://staging.rstudio.cloud',

  // run tests on sauce instead locally
  // user: process.env.SAUCE_USERNAME,
  // key: process.env.SAUCE_ACCESS_KEY,
  // services: ['sauce']
}, { clone: false });


