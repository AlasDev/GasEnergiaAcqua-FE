import { TestBed } from '@angular/core/testing';

import { UtilityMeterTypeService } from './utility-meter-type.service';

describe('UtilityMeterTypeService', () => {
  let service: UtilityMeterTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilityMeterTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
