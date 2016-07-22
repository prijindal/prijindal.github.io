import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router'

import { Loading } from '../directives/loading'

@Component({
  templateUrl:'./home.html',
  styleUrls:['./home.scss'],
  directives:[ROUTER_DIRECTIVES,Loading]
})
export class Home {
  
}
