import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ContactModel} from '../contact.model';
import {ContactService} from '../contact.service';

@Component({
  selector: 'app-contact-row',
  templateUrl: './contact-row.component.html',
  styleUrls: ['./contact-row.component.css']
})
export class ContactRowComponent {
  @Input('currentContact') contact: ContactModel;

  constructor(private contactService:ContactService){

  }

  onRowClick() {
    this.contactService.setCurrentContact(this.contact);
  }
}

