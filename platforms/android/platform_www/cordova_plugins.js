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
    },
    {
      "id": "cordova-plugin-ionic-webview-signosoft-fork.IonicWebView",
      "file": "plugins/cordova-plugin-ionic-webview-signosoft-fork/src/www/util.js",
      "pluginId": "cordova-plugin-ionic-webview-signosoft-fork",
      "clobbers": [
        "Ionic.WebView"
      ]
    },
    {
      "id": "cordova-plugin-network-information.network",
      "file": "plugins/cordova-plugin-network-information/www/network.js",
      "pluginId": "cordova-plugin-network-information",
      "clobbers": [
        "navigator.connection"
      ]
    },
    {
      "id": "cordova-plugin-network-information.Connection",
      "file": "plugins/cordova-plugin-network-information/www/Connection.js",
      "pluginId": "cordova-plugin-network-information",
      "clobbers": [
        "Connection"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-android-tv": "1.0.0",
    "cordova-plugin-device": "2.1.0",
    "cordova-plugin-remote-injection": "0.5.2",
    "cordova.custom.plugins.exitapp": "1.0.0",
    "cordova-plugin-ionic-webview-signosoft-fork": "5.0.2",
    "cordova-plugin-network-information": "3.0.0"
  };
});