import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Contact} from '../../../types/Contact';
// @ts-ignore
import img from '../../../assets/empty-image.png'

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  defaultImage: string;
  @Input() selContact: Contact;
  @Output() delete = new EventEmitter();

  isEditing: boolean

  constructor() {
    this.defaultImage = img;
  }

  ngOnInit(): void {
  }

  startEdit(): void {
    this.isEditing = true
  }

  onDelete() {
    this.delete.emit()
  }
}
