import {Component} from '@angular/core'

@Component({
  selector:'my-app',
  template:require('./app.component.html')
})
export class App {
  text = 'My App'
}
