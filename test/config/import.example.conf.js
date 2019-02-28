// wdio.dev.config.js
import merge from 'deepmerge';
//import wdioConf from './wdio.conf.js';

// have main config file as default but overwrite environment specific information
exports.config = merge(wdioConf.config, {
  capabilities: [
    // more caps defined here
    // ...
  ],

  // run tests on sauce instead locally
  // user: process.env.SAUCE_USERNAME,
  // key: process.env.SAUCE_ACCESS_KEY,
  // services: ['sauce']
}, { clone: false });

// add an additional reporter
exports.config.reporters.push('allure');
