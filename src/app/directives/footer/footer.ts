import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss']
})
export class FooterComponent {
  constructor() {
    const contact = require('../../contact/contact.json');
    for (const c in contact) {
      if (contact.hasOwnProperty(c)) {
        this.footerContact.push({
          type: c,
          user: contact[c].user,
          link: contact[c].link
        });
      }
    }
  }
  footerContact = [];
}
