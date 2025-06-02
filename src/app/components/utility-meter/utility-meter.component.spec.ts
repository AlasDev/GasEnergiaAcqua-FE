import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilityMeterComponent } from './utility-meter.component';

describe('UtilityMeterComponent', () => {
  let component: UtilityMeterComponent;
  let fixture: ComponentFixture<UtilityMeterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UtilityMeterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtilityMeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
