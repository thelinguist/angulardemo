import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactListComponent } from './contact-list.component';

describe('ContactListComponent', () => {
  let component: ContactListComponent;
  let fixture: ComponentFixture<ContactListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the right contact detail when others are undefined', () => {
    expect(component.getDisplayText({
      id: '123',
      firstName: 'Bruce',
    })).toEqual('Bruce')

    expect(component.getDisplayText({
      id: '123',
      firstName: 'Bruce',
      lastName: 'Willis'
    })).toEqual('Bruce Willis')

    expect(component.getDisplayText({
      id: '123',
      phone: '8018018018'
    })).toEqual('8018018018')

    expect(component.getDisplayText({
      id: '123',
      phone: 'contact@email.com'
    })).toEqual('contact@email.com')
  });
});
