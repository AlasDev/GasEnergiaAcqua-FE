import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilityMeterAccordionComponent } from './utility-meter-accordion.component';

describe('UtilityMeterAccordionComponent', () => {
  let component: UtilityMeterAccordionComponent;
  let fixture: ComponentFixture<UtilityMeterAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UtilityMeterAccordionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtilityMeterAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
