import { Component } from '@angular/core';

@Component({
  templateUrl: './about.html',
  styleUrls: ['./about.scss']
})
export class AboutComponent {
  about: any = require('./about.json');
}
