import { Component } from '@angular/core';

@Component({
  templateUrl:'./contact.html',
  styleUrls:['./contact.scss']
})
export class Contact {
  myDetails = require('./contact.json')
}
