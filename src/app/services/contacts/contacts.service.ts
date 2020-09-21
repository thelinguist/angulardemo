import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Contact} from '../../../types/Contact';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  private url = 'api/contacts'

  constructor(private http: HttpClient) { }

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.url).pipe(map(contacts => {
      return contacts.sort((contactA, contactB) => {

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
    }))
  }

  deleteContact(id): Observable<any> {
    return this.http.delete<Contact>(this.url + '/' + id)
  }

  addContact(contact: Contact): Observable<any> {
    return this.http.post<Contact>(this.url, contact)
  }

  updateContact(contact: Contact): Observable<any> {
    return this.http.put<Contact>(this.url + '/' + contact.id, contact)
  }
}
