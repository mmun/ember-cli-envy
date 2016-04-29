var path = require('path');
var dotenv = require('dotenv');
var existsSync = require('exists-sync');

function getProjectConfig(projectRoot) {
  var projectConfigPath = path.join(projectRoot, 'config/envy.js');

  if (existsSync(projectConfigPath)) {
    return require(projectConfigPath);
  }
}

module.exports = {
  name: 'ember-cli-envy',

  init: function() {
    var projectRoot = this.project.root;
    var projectConfig = getProjectConfig(projectRoot);
    var config = {};

    // Silence the missing .env warning by default
    config.silent = true;

    // Inject project configuration
    for (var key in projectConfig) {
      config[key] = projectConfig[key];
    }

    // Paths are re-rooted at the project directory instead of the current
    // working directory. This lets `ember` commands work in sub directories.
    config.path = path.join(projectRoot, config.path || '.env');

    dotenv.load(config);
  }
};
