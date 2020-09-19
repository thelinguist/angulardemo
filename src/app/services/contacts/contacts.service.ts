import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Contact} from '../../../types/Contact';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  private url = 'api/contacts'

  constructor(private http: HttpClient) { }

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.url)
  }
}
