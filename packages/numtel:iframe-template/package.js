Package.describe({
  name: 'numtel:iframe-template',
  summary: ' /* Fill me in! */ ',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Npm.depends({
  less: '1.7.5'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.3.1');
  api.use([
    'coffeescript',
    'underscore',
    'templating'
  ]);
  api.addFiles([
    'lib/iframeTemplate.html',
    'lib/iframeTemplate.coffee'
  ], 'client');
  api.addFiles([
    'lib/renderLess.coffee'
  ], 'server');
});
