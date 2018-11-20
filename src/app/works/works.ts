import { Component } from '@angular/core';

@Component({
  templateUrl: './works.html',
  styleUrls: ['./works.scss']
})
export class WorksComponent {
  works = require('./works.json');
}
