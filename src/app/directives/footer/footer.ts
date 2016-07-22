import { Component } from '@angular/core'
import { ROUTER_DIRECTIVES,Router } from '@angular/router'

@Component({
  selector:'footer',
  templateUrl:'./footer.html',
  styleUrls:['./footer.scss'],
  directives:[ROUTER_DIRECTIVES]
})
export class Footer {
  constructor() {
    var contact = require('../../contact/contact.json')
    for(var c in contact) {
      this.footerContact.push({
        type:c,
        user:contact[c].user,
        link:contact[c].link
      })
    }
  }
  footerContact = []
}
