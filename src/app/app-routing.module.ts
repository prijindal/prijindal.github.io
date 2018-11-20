import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Home } from './home/index';
import { About } from './about/index';
import { Works } from './works/index';
import { Contact } from './contact/index';
import { FourOFour } from './404/index';

const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'about',
    component: About
  },
  {
    path: 'works',
    component: Works
  },
  {
    path: 'contact',
    component: Contact
  },
  {
    path: '**', component: FourOFour
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
