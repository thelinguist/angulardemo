import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Contact} from '../../../types/Contact';
// @ts-ignore
import img from '../../../assets/empty-image.png'

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  defaultImage: string;     // the url to display if no image is present

  @Input() contacts: Contact[];
  @Output() selectContact = new EventEmitter();
  @Output() addContact = new EventEmitter();

  constructor() {
    this.defaultImage = img;
  }

  ngOnInit(): void {
  }

  onSelect(contact: Contact): void {
    this.selectContact.emit(contact)
  }

  getDisplayText(contact: Contact): string {
    if (contact.firstName) {
      let out = contact.firstName
      if (contact.lastName) {
        out += ' ' + contact.lastName
      }
      return out
    } else if (contact.phone) {
      return contact.phone
    } else if (contact.email) {
      return contact.email
    } else {
      return ''
    }
  }

}
