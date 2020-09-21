import {Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild} from '@angular/core';
import {Contact} from '../../../types/Contact';
// @ts-ignore
import img from '../../../assets/empty-image.png'

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit,OnChanges {

  defaultImage: string;
  @Input() selContact: Contact;
  @Output() delete = new EventEmitter();
  @Output() updateContact = new EventEmitter();
  @Output() addContact = new EventEmitter();
  @ViewChild('firstName') firstName: ElementRef;
  @ViewChild('lastName') lastName: ElementRef;
  @ViewChild('email') email: ElementRef;
  @ViewChild('phone') phone: ElementRef;

  isEditing: boolean

  constructor() {
    this.defaultImage = img;
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.selContact.currentValue) {
      this.isEditing = changes.selContact.currentValue.id === '-1'
    }
  }

  toggleEdit(): void {

    this.isEditing = !this.isEditing

    if (this.isEditing) {
      setTimeout(() => this.firstName.nativeElement.focus(), 0);  // wait a frame
    }
  }

  onDelete(): void {
    this.delete.emit()
  }

  save(): void {
    const updates = {
      firstName: this.firstName.nativeElement.value,
      lastName: this.lastName.nativeElement.value,
      email: this.email.nativeElement.value,
      phone: this.phone.nativeElement.value
    } as Contact

    if (this.selContact.id === '-1') {
      this.addContact.emit(updates)
    } else {
      this.updateContact.emit(updates)
    }
    this.isEditing = false;
  }
}
