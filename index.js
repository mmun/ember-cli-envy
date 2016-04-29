var path = require('path');
var dotenv = require('dotenv');
var existsSync = require('exists-sync');

function getProjectConfig(project) {
  var projectConfigPath = path.join(project.root, 'config/envy.js');

  if (existsSync(projectConfigPath)) {
    return require(projectConfigPath);
  }
}

module.exports = {
  name: 'ember-cli-envy',

  init: function() {
    var projectConfig = getProjectConfig(this.project);
    var config = {};

    // Silence the missing .env warning by default
    config.silent = true;

    // Inject project configuration
    for (var key in projectConfig) {
      config[key] = projectConfig[key];
    }

    // Paths are re-rooted at the project directory instead of the current
    // working directory. This lets `ember` commands work in sub directories.
    config.path = path.join(this.project.root, config.path || '.env');

    dotenv.load(config);
  }
};
