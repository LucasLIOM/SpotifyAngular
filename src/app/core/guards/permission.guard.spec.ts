import { TestBed } from '@angular/core/testing';

import { GuardsGuard } from './permission.guard';

describe('GuardsGuard', () => {
  let guard: GuardsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
