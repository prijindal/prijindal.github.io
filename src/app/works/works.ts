import { Component } from '@angular/core';

@Component({
  templateUrl:'./works.html',
  styleUrls:['./works.scss']
})
export class Works {
  works = require('./works.json')
}
