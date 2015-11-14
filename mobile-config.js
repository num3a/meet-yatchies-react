App.info({
  name: 'Sporty',
  description: 'The Uber of sport coaching.',
  author: 'Emmanuel ERNEST',
  website: '',
  version: '0.1.0'
});

App.setPreference('StatusBarOverlaysWebView', true);
App.setPreference('StatusBarStyle', 'default');

App.accessRule('http://meteor.local/*');
App.accessRule('http://placehold.it/*');
App.accessRule('https://engine.kadira.io/*');
App.accessRule('https://enginex.kadira.io/*');

App.icons({
  'iphone': 'resources/icons/iphone.png',
  'iphone_2x': 'resources/icons/iphone_2x.png',
  'iphone_3x': 'resources/icons/iphone_3x.png',
  'ipad': 'resources/icons/ipad.png',
  'ipad_2x': 'resources/icons/ipad_2x.png',
  'android_ldpi': 'resources/icons/android_ldpi.png',
  'android_mdpi': 'resources/icons/android_mdpi.png',
  'android_hdpi': 'resources/icons/android_hdpi.png',
  'android_xhdpi': 'resources/icons/android_xhdpi.png'
});

App.launchScreens({
  'iphone': 'resources/splash/iphone.png',
  'iphone_2x': 'resources/splash/iphone_2x.png',
  'iphone5': 'resources/splash/iphone5.png',
  'iphone6': 'resources/splash/iphone6.png',
  'iphone6p_portrait': 'resources/splash/iphone6p_portrait.png',
  'iphone6p_landscape': 'resources/splash/iphone6p_landscape.png',
  'ipad_portrait': 'resources/splash/ipad_portrait.png',
  'ipad_portrait_2x': 'resources/splash/ipad_portrait_2x.png',
  'ipad_landscape': 'resources/splash/ipad_landscape.png',
  'ipad_landscape_2x': 'resources/splash/ipad_landscape_2x.png',
  'android_ldpi_portrait': 'resources/splash/android_ldpi_portrait.png',
  'android_ldpi_landscape': 'resources/splash/android_ldpi_landscape.png',
  'android_mdpi_portrait': 'resources/splash/android_mdpi_portrait.png',
  'android_mdpi_landscape': 'resources/splash/android_mdpi_landscape.png',
  'android_hdpi_portrait': 'resources/splash/android_hdpi_portrait.png',
  'android_hdpi_landscape': 'resources/splash/android_hdpi_landscape.png',
  'android_xhdpi_portrait': 'resources/splash/android_xhdpi_portrait.png',
  'android_xhdpi_landscape': 'resources/splash/android_xhdpi_landscape.png'
});