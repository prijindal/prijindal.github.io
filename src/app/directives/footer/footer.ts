import { Component } from '@angular/core'

@Component({
  selector:'footer',
  templateUrl:'./footer.html',
  styleUrls:['./footer.scss']
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
