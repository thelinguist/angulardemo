import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Contact} from '../../../types/Contact';

const FIRST_NAMES = ['Ashley', 'Ashton', 'Alex', 'Zoe', 'Xavier', 'Jonathan', 'Harold', 'Bernie', 'Samantha', 'Jessica', 'Taylor', 'McKay', 'McKenzie', 'McKenna', 'Ron', 'Harry', 'Albert']
const LAST_NAMES = ['Smith', 'Johnson', 'Rodriguez', 'Jackson', 'Li', 'Modi', 'Merkel', 'Lincoln', 'Doe', 'Jensen', 'Carter', 'Christofferson', 'Perez']
const EMAIL_ENDINGS = ['@gmail.com', '@yahoo.com', '@hotmail.com', '@email.com']

@Injectable({
  providedIn: 'root'
})
export class FakeServerService implements InMemoryDbService {

  randomNumber = (max = 10) => {
    return Math.floor(Math.random() * max)
  }

  randomSeries = (length) => {
    let out = ''
    for (let i = 0; i < length; i++) {
      out += this.randomNumber()
    }
    return out
  }

  createDb(): {contacts: Contact[]} {
    const contacts: Contact[] = []
    for (let i = 0; i < 100; i++) {
      const first = FIRST_NAMES[this.randomNumber(FIRST_NAMES.length)]
      contacts.push({
        id: this.randomSeries(16),
        firstName: first,
        lastName: LAST_NAMES[this.randomNumber(LAST_NAMES.length)],
        phone: this.randomSeries(10),
        email: first.toLowerCase() + EMAIL_ENDINGS[this.randomNumber(EMAIL_ENDINGS.length)]
      })
    }

    const sorted = contacts.sort((contactA, contactB) => {

      if (contactA.firstName.toLowerCase() < contactB.firstName.toLowerCase()) { return -1; }
      if (contactA.firstName.toLowerCase() > contactB.firstName.toLowerCase()) { return 1; }
      else {
        if (contactA.lastName && contactB.lastName) {
          if (contactA.lastName.toLowerCase() < contactB.lastName.toLowerCase()) { return -1; }
          if (contactA.lastName.toLowerCase() > contactB.lastName.toLowerCase()) { return 1; }
          else { return 0; }
        }
      }
    });

    return {contacts: sorted}
  }
}
