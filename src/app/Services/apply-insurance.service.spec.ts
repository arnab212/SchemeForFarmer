import { TestBed } from '@angular/core/testing';

import { ApplyInsuranceService } from './apply-insurance.service';

describe('ApplyInsuranceService', () => {
  let service: ApplyInsuranceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplyInsuranceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
