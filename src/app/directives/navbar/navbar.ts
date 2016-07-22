import { Component } from '@angular/core'
import { ROUTER_DIRECTIVES,Router } from '@angular/router'

@Component({
  selector:'navbar',
  templateUrl:'./navbar.html',
  styleUrls:['./navbar.scss'],
  directives:[ROUTER_DIRECTIVES]
})
export class NavBar {
  constructor(
    private router:Router
  ) {console.dir(router)}
}
