import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { provideRouter } from '@angular/router'

import { AppComponent,APP_ROUTER_PROVIDERS } from './app/index';
if (process.env.ENV === 'production') {
  enableProdMode();
  require('offline-plugin/runtime').install()
}
bootstrap(AppComponent, [
  APP_ROUTER_PROVIDERS
])
.catch(err => console.error(err));
