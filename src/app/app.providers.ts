import { provideRouter } from '@angular/router'
import { disableDeprecatedForms, provideForms } from '@angular/forms';

import { routes } from './app.routes'

export const APP_ROUTER_PROVIDERS = [
  disableDeprecatedForms(),
  provideForms(),
  provideRouter(routes)
]
