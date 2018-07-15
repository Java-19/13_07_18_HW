import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-contact-row',
  templateUrl: './contact-row.component.html',
  styleUrls: ['./contact-row.component.css']
})
export class ContactRowComponent {
  @Input('currentContact') contact: Contact;
  @Output('rowClickEvent') emitter: EventEmitter<Contact> = new EventEmitter<Contact>();

  onRowClick() {
    this.emitter.emit(this.contact);
  }
}
type Contact = {
  name:string,
  email:string,
  phone:string,
  address: string
}
