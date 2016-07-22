import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router'

@Component({
  templateUrl:'./about.html',
  styleUrls:['./about.scss'],
  directives:[ROUTER_DIRECTIVES]
})
export class About {
  about:any = require('./about.json');
}
