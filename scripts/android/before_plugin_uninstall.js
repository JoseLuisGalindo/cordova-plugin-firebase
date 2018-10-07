var helper = require('./helper');

module.exports = function(context) {
    console.log('Running before_plugin_uninstall for FIREBASE cordova plugin for ANDROID');
    // Remove the Gradle modifications that were added when the plugin was installed.
    helper.restoreRootBuildGradle();
};
