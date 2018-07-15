import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent{
    name:string = '';
    email: string = '';
    phone: string = '';
    address: string = '';

    @Output('addContactEvent') emitter: EventEmitter<Contact> = new EventEmitter<Contact>();

    sendNewContact(): void{
      this.emitter.emit({
        name : this.name,
        email: this.email,
        phone: this.phone,
        address: this.address
      });

      this.name = '';
      this.email = '';
      this.phone = '';
      this.address = '';
    }
}
type Contact = {
  name:string,
  email:string,
  phone:string,
  address: string
}
