// import shiyappsioConf
// import { merge } from  'deepmerge';
var shiyappsioConf = require('../shinyappsio.base.conf.js');
var merge = require('deepmerge');

// have main config file as default but overwrite environment specific information
exports.config = merge(shiyappsioConf.config, {

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
    './test/specs/shinyappsio/landing.spec.js'
  ],
  // Patterns to exclude.
  exclude: [
    // './test/specs/file-to-exclude.js'
  ],

  // capabilities: [
  //   {
  //     // maxInstances can get overwritten per capability. So if you have an in-house Selenium
  //     // grid with only 5 Chrome instances available you can make sure that not more than
  //     // 5 instances get started at a time.
  //     //maxInstances: 5,
  //     browserName: 'chrome',
  //     'goog:chromeOptions': {
  //       // to run chrome headless the following flags are required
  //       // (see https://developers.google.com/web/updates/2017/04/headless-chrome)
  //       //args: ['--headless', '--disable-gpu'],
  //     }
  //   }]

  // run tests on sauce instead locally
  // user: process.env.SAUCE_USERNAME,
  // key: process.env.SAUCE_ACCESS_KEY,
  // services: ['sauce']
}, { clone: false });


