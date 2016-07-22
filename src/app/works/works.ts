import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router'

import { Loading } from '../directives/loading'

@Component({
  templateUrl:'./works.html',
  styleUrls:['./works.scss'],
  directives:[ROUTER_DIRECTIVES,Loading]
})
export class Works {
  previewPlatform = 'md'

  platforms = [
    {name:'ios', title:'iOS'},
    {name:'md', title: 'Android'},
    {name:'windows',title:'Windows'}
  ]
}
