import { Component,ViewEncapsulation } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router'

import { NavBar } from './directives/navbar/index'
import { Footer } from './directives/footer/index'

@Component({
  selector: 'my-app',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.scss'],
  directives: [
    ROUTER_DIRECTIVES,
    NavBar,
    Footer
  ],
  encapsulation:ViewEncapsulation.None
})
export class AppComponent {

}
