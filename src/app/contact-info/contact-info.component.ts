import {Component,} from '@angular/core';
import {ContactService} from '../contact.service';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent {

  constructor(public contactService: ContactService){

  }
}

