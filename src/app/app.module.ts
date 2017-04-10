import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';


import { NavBar } from './directives/navbar/index'
import { Footer } from './directives/footer/index'

import { AppComponent } from './app.component';

import { Home } from './home/index'
import { About } from './about/index'
import { Works } from './works/index'
import { Contact } from './contact/index'
import { FourOFour } from './404/index'

@NgModule({
  declarations: [
    AppComponent,
    NavBar,
    Footer,
    Home,
    About,
    Works,
    Contact,
    FourOFour
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
