import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector:'navbar',
  templateUrl:'./navbar.html',
  styleUrls:['./navbar.scss']
})
export class NavBar {
  constructor(
    private router:Router
  ) {}
}
