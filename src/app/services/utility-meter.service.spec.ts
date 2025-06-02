import { TestBed } from '@angular/core/testing';

import { UtilityMeterService } from './utility-meter.service';

describe('UtilityMeterService', () => {
  let service: UtilityMeterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilityMeterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
