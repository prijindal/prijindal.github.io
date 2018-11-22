// These are important and needed before anything else
require('zone.js/dist/zone-node');
require('reflect-metadata');

const { readFileSync } = require('fs');
const { join } = require('path');
const { renderModuleFactory } = require('@angular/platform-server');
const { enableProdMode } = require('@angular/core');
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./dist/server/main.js');
const { provideModuleMap } = require('@nguniversal/module-map-ngfactory-loader');

const DIST_FOLDER = join(process.cwd(), 'dist');

const template = readFileSync(join(DIST_FOLDER, 'browser', 'index.html')).toString();

// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

function renderUrl(url) {
  return renderModuleFactory(AppServerModuleNgFactory, {
    // Our index.html
    document: template,
    url: url,
    // DI so that we can get lazy-loading to work differently (since we need it to just instantly render it)
    extraProviders: [
      provideModuleMap(LAZY_MODULE_MAP)
    ]
  });
}

if (process.argv.length > 2) {
  renderUrl(process.argv[2]).then(console.log);
}

module.exports = renderUrl;
