import {Component, OnInit} from '@angular/core'
import {Routes, Router, ROUTER_DIRECTIVES} from '@angular/router'

import { MessageBox } from './message-box/message-box'
import { BottomBar } from './bottom-bar/bottom-bar'

import { WorksPageComponent } from './works-page/works-page'

@Routes([
  {
    path:'/works',
    component:WorksPageComponent
  }
])
@Component({
  selector:'my-app',
  template:require('./app.component.html'),
  styles:[require('./app.component.scss')],
  directives:[
    MessageBox,
    BottomBar,
    ROUTER_DIRECTIVES
  ]
})
export class App implements OnInit {
  constructor(
    private route: Router
  ) {}

  ngOnInit() {
    this.route.navigate(['/works'])
  }
}
