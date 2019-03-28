
// import baseConf
// import { merge } from  'deepmerge';
var baseConf = require('../base.conf.js');
var merge = require('deepmerge');

exports.config = merge(baseConf.config, {

  baseUrl: 'https://rstudio.cloud',

}, { clone: false });
