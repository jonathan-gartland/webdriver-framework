// import baseConf
// import { merge } from  'deepmerge';
var ideConf = require("./ide.base.conf.js");
var merge = require("deepmerge");

// have main config file as default but overwrite environment specific information
exports.config = merge(ideConf.config, {

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
    //'./test/specs/ide/landing.spec.js',
    //'./test/specs/ide/login/login.spec.js',
    './test/specs/ide/project/project.spec.js'
    // './test/specs/ide/smoke.spec.js',
  ],
  // Patterns to exclude.
  exclude: [
    // './test/specs/file-to-exclude.js'
  ],

  //
  // ============
  // Capabilities
  // ============
  // Define your capabilities here. WebdriverIO can run multiple capabilities at the same
  // time. Depending on the number of capabilities, WebdriverIO launches several test
  // sessions. Within your capabilities you can overwrite the spec and exclude options in
  // order to group specific specs to a specific capability.
  //
  // First, you can define how many instances should be started at the same time. Let's
  // say you have 3 different capabilities (Chrome, Firefox, and Safari) and you have
  // set maxInstances to 1; wdio will spawn 3 processes. Therefore, if you have 10 spec
  // files and you set maxInstances to 10, all spec files will get tested at the same time
  // and 30 processes will get spawned. The property handles how many capabilities
  // from the same test should run tests.
  //
  maxInstances: 15,

  capabilities: [
    // {
    //   // maxInstances can get overwritten per capability. So if you have an in-house Selenium
    //   // grid with only 5 Chrome instances available you can make sure that not more than
    //   // 5 instances get started at a time.
    //   maxInstances: 5,
    //   browserName: 'chrome',
    //   'goog:chromeOptions': {
    //     // to run chrome headless the following flags are required
    //     // (see https://developers.google.com/web/updates/2017/04/headless-chrome)
    //     args: ['--headless', '--disable-gpu'],
    //   }
    // },

    {
      // maxInstances can get overwritten per capability. So if you have an in-house Selenium
      // grid with only 5 firefox instances available you can make sure that not more than
      // 5 instances get started at a time.
      maxInstances: 5,
      browserName: 'firefox',
      "moz:firefoxOptions": {
        // flag to activate Firefox headless mode (see https://github.com/mozilla/geckodriver/blob/master/README.md#firefox-capabilities for more details about moz:firefoxOptions)
        args: ['-headless']
      }
    },

    //{
    //   // maxInstances can get overwritten per capability. So if you have an in-house Selenium
    //   // grid with only 5 Safari instances available you can make sure that not more than
    //   // 5 instances get started at a time.
    //   maxInstances: 5,
    //   browserName: 'safari',
    //},

    //{
    //   // maxInstances can get overwritten per capability. So if you have an in-house Selenium
    //   // grid with only 5 IE instances available you can make sure that not more than
    //   // 5 instances get started at a time.
    //maxInstances: 5,
    //browserName: 'internet explorer',
    //   acceptUntrustedCertificates: true,
    //   ignoreProtectedModeSettings: true,    //only applicable to IE browser
    //   ignoreZoomSetting: true,              //only applicable to IE browser
    //   ensureCleanSession: true,
    // },
  ],
  //
  // ===================
  // Test Configurations
  // ===================
  // Define all options that are relevant for the WebdriverIO instance here
  //
  // By default WebdriverIO commands are executed in a synchronous way using
  // the wdio-sync package. If you still want to run your tests in an async way
  // e.g. using promises you can set the sync option to false.
  sync: true,
  logLevel: 'error',    // Level of logging verbosity: silent | verbose | command | data | result | error
  // Warns when a deprecated command is used
  deprecationWarnings: true,
  //
  // If you only want to run your tests until a specific amount of tests have failed use
  // bail (default is 0 - don't bail, run all tests).
  bail: 0,
  //
  // Set a base URL in order to shorten url command calls. If your url parameter starts
  // with "/", then the base url gets prepended.
  baseUrl: 'https://rstudio.cloud',
  waitforTimeout: 10000,            // Default timeout for all waitFor* commands.
  connectionRetryTimeout: 90000,    // Default timeout in milliseconds for request if Selenium Grid doesn't send response
  connectionRetryCount: 3,          // Default request retries count

  services: ['selenium-standalone'],
  // services: ['browserstack'],
  // user: process.env.BROWSERSTACK_USERNAME || 'BROWSERSTACK_USERNAME',
  // key: process.env.BROWSERSTACK_ACCESS_KEY || 'BROWSERSTACK_ACCESS_KEY',

  // browserstackLocal: true,

  // run tests on sauce instead locally
  // user: process.env.SAUCE_USERNAME,
  // key: process.env.SAUCE_ACCESS_KEY,
  // services: ['sauce']
}, { clone: false });



