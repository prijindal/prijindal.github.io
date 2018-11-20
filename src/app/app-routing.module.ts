import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { AboutComponent } from './about/index';
import { WorksComponent } from './works/index';
import { ContactComponent } from './contact/index';
import { FourOFourComponent } from './404/index';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'works',
    component: WorksComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: '**', component: FourOFourComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
