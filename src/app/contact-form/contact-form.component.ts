import {Component} from '@angular/core';
import {ContactService} from '../contact.service';
import {ContactModel} from '../contact.model';

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

    constructor(private contactService:ContactService){}



    sendNewContact(): void{
      this.contactService.addContact(
        new ContactModel(this.name,
          this.email,
          this.phone,
          this.address)
      );

      this.name = '';
      this.email = '';
      this.phone = '';
      this.address = '';
    }
}
