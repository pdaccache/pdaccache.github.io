cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-inappbrowser.inappbrowser",
      "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
      "pluginId": "cordova-plugin-inappbrowser",
      "clobbers": [
        "cordova.InAppBrowser.open",
        "window.open"
      ]
    },
    {
      "id": "cordova-plugin-splashscreen.SplashScreen",
      "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
      "pluginId": "cordova-plugin-splashscreen",
      "clobbers": [
        "navigator.splashscreen"
      ]
    },
    {
      "id": "cordova-plugin-firebase-analytics.FirebaseAnalytics",
      "file": "plugins/cordova-plugin-firebase-analytics/www/FirebaseAnalytics.js",
      "pluginId": "cordova-plugin-firebase-analytics",
      "merges": [
        "cordova.plugins.firebase.analytics"
      ]
    },
    {
      "id": "cordova-plugin-admobpro-firebase.AdMob",
      "file": "plugins/cordova-plugin-admobpro-firebase/www/AdMob.js",
      "pluginId": "cordova-plugin-admobpro-firebase",
      "clobbers": [
        "window.AdMob"
      ]
    },
    {
      "id": "cordova-plugin-firebase-lib.FirebasePlugin",
      "file": "plugins/cordova-plugin-firebase-lib/www/firebase.js",
      "pluginId": "cordova-plugin-firebase-lib",
      "clobbers": [
        "FirebasePlugin"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-inappbrowser": "3.2.0",
    "cordova-plugin-splashscreen": "5.0.3",
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-android-firebase-gradle-release": "4.0.0",
    "cordova-android-play-services-gradle-release": "4.0.0",
    "cordova-android-support-gradle-release": "3.0.1",
    "cordova-support-android-plugin": "1.0.1",
    "cordova-support-google-services": "1.3.2",
    "cordova-plugin-firebase-analytics": "4.0.1",
    "cordova-plugin-firebase-inappmessaging": "3.0.0",
    "cordova-plugin-enable-multidex": "0.2.0",
    "cordova-plugin-extension": "1.5.4",
    "cordova-plugin-admobpro-firebase": "2.49.0",
    "cordova-plugin-firebase-lib": "5.1.1"
  };
});