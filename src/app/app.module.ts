import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';


import { NavBarComponent } from './directives/navbar/index';
import { FooterComponent } from './directives/footer/index';

import { AppComponent } from './app.component';

import { HomeComponent } from './home/index';
import { AboutComponent } from './about/index';
import { WorksComponent } from './works/index';
import { ContactComponent } from './contact/index';
import { FourOFourComponent } from './404/index';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    WorksComponent,
    ContactComponent,
    FourOFourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
