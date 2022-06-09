import { TestBed } from '@angular/core/testing';

import { CanAccessAdminGuardGuard } from './can-access-admin-guard.guard';

describe('CanAccessAdminGuardGuard', () => {
  let guard: CanAccessAdminGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanAccessAdminGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
