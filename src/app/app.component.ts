import {Component, OnInit} from '@angular/core';
import {ContactsService} from './services/contacts/contacts.service';
import {Contact} from '../types/Contact';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'addressbookangular';
  contacts: Contact[]
  selContact: Contact

  constructor(private contactsService: ContactsService) {
  }

  ngOnInit(): void {
    this.contactsService.getContacts().subscribe(contacts => {
      this.contacts = contacts
      this.selContact = contacts[0]
    });
  }

  delete(contact: Contact): void {
    this.contacts = this.contacts.filter(c => c !== contact);
    this.contactsService.deleteContact(contact).subscribe(() => {
      this.selContact = undefined
    });
  }

  selectContact(contact: Contact): void {
    this.selContact = contact
  }
}
