import {Component} from '@angular/core'

import { MessageBox } from './message-box/message-box'

@Component({
  selector:'my-app',
  template:require('./app.component.html'),
  styles:[require('./app.component.scss')],
  directives:[MessageBox]
})
export class App {
  text = 'My App'
  messaging:Boolean = false
}
