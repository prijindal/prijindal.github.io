import { bootstrap }    from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core'

import { App , APP_PROVIDERS} from './app/index';

if (process.env.ENV === 'production') {
  enableProdMode();
}

import './styles.css';

bootstrap(App, APP_PROVIDERS);
