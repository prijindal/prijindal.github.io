import { Component } from '@angular/core';

@Component({
  templateUrl: './works.html',
})
export class WorksComponent {
  works = require('./works.json');
}
