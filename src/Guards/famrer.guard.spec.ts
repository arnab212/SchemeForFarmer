import { TestBed } from '@angular/core/testing';

import { FamrerGuard } from './famrer.guard';

describe('FamrerGuard', () => {
  let guard: FamrerGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(FamrerGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
