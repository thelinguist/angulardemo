import { TestBed } from '@angular/core/testing';

import { FakeServerService } from './fake-server.service';

describe('FakeServerService', () => {
  let service: FakeServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should make a random number of given length', () => {
    const res = service.randomSeries(11)
    expect(res.length).toBe(11)
  })

  it('should have contacts with a random firstName, lastName, phone and email',  () => {
    const {contacts} = service.createDb()
    contacts.forEach(contact => {
      expect(contact.firstName).toBeTruthy()
      expect(contact.lastName).toBeTruthy()
      expect(contact.email).toBeTruthy()
      expect(contact.phone.length).toBe(10)
    })
  })
});
