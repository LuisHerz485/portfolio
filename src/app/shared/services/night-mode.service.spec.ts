import { TestBed } from '@angular/core/testing';

import { NightModeService } from './night-mode.service';

describe('NightModeService', () => {
  let service: NightModeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NightModeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
