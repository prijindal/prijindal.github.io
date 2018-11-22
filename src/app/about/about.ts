import { Component } from '@angular/core';

@Component({
  templateUrl: './about.html'
})
export class AboutComponent {
  about: any = require('./about.json');
}
