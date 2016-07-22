import { RouterConfig } from '@angular/router'

import { Home } from './home/index'
import { Works } from './works/index'
import { FourOFour } from './404/index'

export const routes: RouterConfig = [
  {
    path: '',
    component: Home
  },
  {
    path:'works',
    component: Works
  },
  {
    path: '**', component: FourOFour
  },
];
