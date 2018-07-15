import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contacts: Contact[] = [];
  currentContact: Contact = null;

  addContact(contact: Contact) {
    this.contacts.push(contact);
  }

  setCurrentContact(i: number) {
    this.currentContact = this.contacts[i];
  }
}
type Contact = {
  name:string,
  email:string,
  phone:string,
  address: string
}
