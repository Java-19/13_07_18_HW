import {ContactModel} from './contact.model';

export class ContactService {
  currentContact: ContactModel = null;
  contacts: ContactModel[] = [];

  public addContact(contact: ContactModel): void{
    this.contacts.push(contact);
  }

  public setCurrentContact(contact:ContactModel):void{
    this.currentContact = contact;
  }
}
