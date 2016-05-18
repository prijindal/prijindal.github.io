import { Component } from '@angular/core'

@Component({
  selector:'message-box',
  template:require('./message-box.html'),
  styles:[require('./message-box.scss')]
})
export class MessageBox {
  messaging:boolean = false
  form = {message:''}
  textarearows = 3
  submitted:boolean = false

  calculateRows() {
    var length = this.form.message.split("\n").length + 1
    this.textarearows = length > 3 ? length : 3
  }

  sendMessage(e) {
    e.preventDefault()
    console.log(this.form)
    this.submitted = true
  }

  closeThis() {
    this.messaging = false
    this.submitted = false
    this.form = {message:''}
    this.calculateRows()
  }

  toggleThis() {
    if(this.messaging) return this.closeThis()
    this.messaging = true
  }
}
