import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent {
  // @Input('contactInfo')contact:Contact = null;
  contact:Contact = null;
  setContact(contact:Contact){
    this.contact = contact;
  }
}
type Contact = {
  name:string,
  email:string,
  phone:string,
  address: string
}
