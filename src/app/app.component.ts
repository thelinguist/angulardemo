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

  updateContacts(idToSelect?: string): void {
    this.contactsService.getContacts().subscribe(contacts => {
      this.contacts = contacts
      if (!idToSelect) {
        this.selContact = contacts[0]
      } else {
        const i = contacts.findIndex(c => c.id === idToSelect)
        if (i === -1) {
          this.selContact = contacts[0]
        } else {
          this.selContact = contacts[i]
        }
      }
    });
  }

  ngOnInit(): void {
    this.updateContacts()
  }

  startNewContact(): void {
    this.selContact = {
      id: '-1'
    }
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

  addContact(contact: Contact): void {
    this.contactsService.addContact(contact).subscribe((res) => {
      this.updateContacts(res.id)
    })
  }

  updateContact(contact: Contact): void {
    const newVersion = {...this.selContact}
    for (const key in contact) {
      if (contact[key]) {
        newVersion[key] = contact[key]
      }
    }
    this.contactsService.updateContact(newVersion).subscribe((res) => {
      this.updateContacts(newVersion.id)
    })
  }
}
