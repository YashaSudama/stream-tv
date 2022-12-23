cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-device.device",
      "file": "plugins/cordova-plugin-device/www/device.js",
      "pluginId": "cordova-plugin-device",
      "clobbers": [
        "device"
      ]
    },
    {
      "id": "cordova.custom.plugins.exitapp.exitApp",
      "file": "plugins/cordova.custom.plugins.exitapp/www/ExitApp.js",
      "pluginId": "cordova.custom.plugins.exitapp",
      "merges": [
        "navigator.app"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-android-tv": "1.0.0",
    "cordova-plugin-device": "2.1.0",
    "cordova-plugin-remote-injection": "0.5.2",
    "cordova.custom.plugins.exitapp": "1.0.0"
  };
});