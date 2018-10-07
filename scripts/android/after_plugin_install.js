var helper = require('./helper');

module.exports = function(context) {
    console.log('Running after_plugin_install for FIREBASE cordova plugin for ANDROID');
    // Modify the Gradle build file to add a task that will upload the debug symbols
    // at build time.
    helper.restoreRootBuildGradle();
    helper.modifyRootBuildGradle();
};
