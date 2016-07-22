import { Component } from '@angular/core'
import { ROUTER_DIRECTIVES,Router } from '@angular/router'

import { Loading } from '../loading/'

@Component({
  selector:'navbar',
  templateUrl:'./navbar.html',
  styleUrls:['./navbar.scss'],
  directives:[ROUTER_DIRECTIVES,Loading]
})
export class NavBar {
  constructor(
    private router:Router
  ) {}

  buttons = [
    {
      icon:'home',
      title:'Home',
      route:'/'
    },
    {
      icon:'info',
      title:'About',
      route:'about'
    },
    {
      icon:'code',
      title:'Skills',
      route:'skills'
    },
      {
      icon:'briefcase',
      title:'Work',
      route:'works'
    },
    {
      icon:'envelope',
      title:'Contact',
      route:'contact'
    }
  ]
}
