import { TestBed } from '@angular/core/testing';

import { UsercontactService } from './usercontact.service';

describe('UsercontactService', () => {
  let service: UsercontactService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsercontactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
