import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router'

@Component({
  templateUrl:'./contact.html',
  styleUrls:['./contact.scss'],
  directives:[ROUTER_DIRECTIVES]
})
export class Contact {
  myDetails = require('./contact.json')
}
