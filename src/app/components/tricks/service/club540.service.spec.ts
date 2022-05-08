import { TestBed } from '@angular/core/testing';

import { Club540Service } from './club540.service';

describe('Club540Service', () => {
  let service: Club540Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Club540Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
