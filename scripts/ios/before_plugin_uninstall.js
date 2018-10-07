var helper = require("./helper");

module.exports = function(context) {
    console.log('Running before_plugin_uninstall for FIREBASE cordova plugin for IOS');
    // Remove the build script that was added when the plugin was installed.
    var xcodeProjectPath = helper.getXcodeProjectPath(context);
    helper.removeShellScriptBuildPhase(context, xcodeProjectPath);
};
