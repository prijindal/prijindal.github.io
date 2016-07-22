import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router'

@Component({
  templateUrl:'./home.html',
  styleUrls:['./home.scss'],
  directives:[ROUTER_DIRECTIVES]
})
export class Home {
  homeDetails = require('./home.json')
}
