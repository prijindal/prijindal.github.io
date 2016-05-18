import {Component} from '@angular/core'

import { MessageBox } from './message-box/message-box'
import { BottomBar } from './bottom-bar/bottom-bar'

@Component({
  selector:'my-app',
  template:require('./app.component.html'),
  styles:[require('./app.component.scss')],
  directives:[MessageBox, BottomBar]
})
export class App {
  
}
