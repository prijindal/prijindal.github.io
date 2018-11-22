import { Component } from '@angular/core';

@Component({
  templateUrl: './home.html'
})
export class HomeComponent {
  homeDetails = require('./home.json');
}
