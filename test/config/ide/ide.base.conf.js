
const baseConf = require("../base.conf.js");
const merge = require("deepmerge");

exports.config = merge(baseConf.config, {

  baseUrl: "https://rstudio.cloud",

}, { clone: false });
