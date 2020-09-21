import {Component, Input, OnInit} from '@angular/core';
import {Contact} from '../../../types/Contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  @Input() contacts: Contact[];
  constructor() { }

  ngOnInit(): void {
  }

}
