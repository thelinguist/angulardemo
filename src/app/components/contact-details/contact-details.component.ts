import {Component, Input, OnInit} from '@angular/core';
import {Contact} from '../../../types/Contact';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  @Input() selContact: Contact;

  constructor() { }

  ngOnInit(): void {
  }

}
