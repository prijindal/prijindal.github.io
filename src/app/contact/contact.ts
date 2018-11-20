import { Component } from '@angular/core';

@Component({
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss']
})
export class ContactComponent {
  myDetails = require('./contact.json');
}
