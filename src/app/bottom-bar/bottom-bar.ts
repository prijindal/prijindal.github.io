import { Component } from '@angular/core'

@Component({
  selector:'bottom-bar',
  template:require('./bottom-bar.html'),
  styles:[require('./bottom-bar.scss')]
})
export class BottomBar {
  buttons = [{
    icon:'info',
    title:'About'
  },{
    icon:'code',
    title:'Skills'
  },{
    icon:'briefcase',
    title:'Work'
  },{
    icon:'envelope',
    title:'Contact'
  }]
}
