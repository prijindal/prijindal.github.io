import { Component } from '@angular/core'

@Component({
  selector:'works-page',
  template:require('./works-page.html'),
  styles:[require('./works-page.scss')]
})
export class WorksPageComponent {
  previewPlatform = 'md'

  platforms = [
    {name:'ios', title:'iOS'},
    {name:'md', title: 'Android'},
    {name:'windows',title:'Windows'}
  ]
}
