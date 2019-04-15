
const ideConf = require("./ide.base.conf.js");
const merge = require("deepmerge");

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
      //"./test/specs/ide/spaces/space.spec.js",
      "./test/specs/ide/project/robbys.links.spec.js",
  ],
  // Patterns to exclude.
  exclude: [
    // './test/specs/file-to-exclude.js'
  ],


  // run tests on sauce instead locally
  // user: process.env.SAUCE_USERNAME,
  // key: process.env.SAUCE_ACCESS_KEY,
  // services: ['sauce']
}, { clone: false });



