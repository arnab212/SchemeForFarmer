import { TestBed } from '@angular/core/testing';

import { BidderDetailsService } from './bidder-details.service';

describe('BidderDetailsService', () => {
  let service: BidderDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BidderDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
