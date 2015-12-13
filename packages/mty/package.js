Package.describe({
  name: 'meetyatchies:mty',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.addFiles('mty.js');


  api.use('meetyatchies:mty-payments');
  api.use('meetyatchies:mty-nofitications');
  api.export('MTY',['client','server']);
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('meetyatchies:mty');
  api.addFiles('mty-tests.js');
});
