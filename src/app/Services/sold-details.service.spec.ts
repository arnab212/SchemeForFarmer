import { TestBed } from '@angular/core/testing';

import { SoldDetailsService } from './sold-details.service';

describe('SoldDetailsService', () => {
  let service: SoldDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoldDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
