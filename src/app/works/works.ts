import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router'

@Component({
  templateUrl:'./works.html',
  styleUrls:['./works.scss'],
  directives:[ROUTER_DIRECTIVES]
})
export class Works {
  works = require('./works.json')
}
