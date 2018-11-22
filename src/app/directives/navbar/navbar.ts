import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
})
export class NavBarComponent {
  constructor(
    public router: Router
  ) {}
}
