/* jshint node: true */
'use strict';

var path = require('path');
var dotenv = require('dotenv');
var existsSync = require('exists-sync');

module.exports = {
  name: 'ember-cli-envy',

  init: function() {
    // Paths are re-rooted at the project directory instead of the current
    // working directory. This lets `ember` commands work in sub directories.

    var configPath = path.join(this.project.root, 'config/envy.js');
    var config = existsSync(configPath) ? require(configPath) : {};

    config.path = path.join(this.project.root, config.path || '.env');

    dotenv.config(config);
  }
};
