import {Component, OnInit} from '@angular/core';
import {UtilityMeterService} from '../../services/utility-meter.service';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {UtilityMeter, UtilityMeterFilterReduced, UtilityMeterType} from '../../utils/utilityMeter';
import {ResourceType} from '../../utils/resourceType';
import {BehaviorSubject} from 'rxjs';
import {ResourceTypeService} from '../../services/resource-type.service';
import {UtilityMeterTypeService} from '../../services/utility-meter-type.service';

@Component({
  selector: 'app-utility-meter',
  templateUrl: './utility-meter.component.html',
  standalone: false,
  styleUrl: './utility-meter.component.css'
})
export class UtilityMeterComponent implements OnInit {

  utilityMeterForm: FormGroup;

  //utilityMeter
  utilityMetersSubject = new BehaviorSubject<UtilityMeter[]>([]);
  utilityMeters$ = this.utilityMetersSubject.asObservable();

  //resource Type
  resourceTypeSubject = new BehaviorSubject<ResourceType[] | null>(null);
  resourceType$ = this.resourceTypeSubject.asObservable();

  //utilityMeter Type
  utilityMeterTypeSubject = new BehaviorSubject<UtilityMeterType[] | null>(null);
  utilityMeterType$ = this.utilityMeterTypeSubject.asObservable();

  constructor(private fb: FormBuilder,
              private http: HttpClient,
              private utilityMeterService: UtilityMeterService,
              private resourceTypeService: ResourceTypeService,
              private utilityMeterTypeService: UtilityMeterTypeService) {
    this.utilityMeterForm = this.fb.group({
      resourceTypeId: new FormControl(''),
      utilityMeterTypeId: new FormControl(''),
      servicePointIdentifier: new FormControl(''),
      serialNumber: new FormControl(''),
      meterName: new FormControl(''),
      fromInstallationDateAt: new FormControl(''),
      toInstallationDateAt: new FormControl(''),
    })
  }

  ngOnInit(): void {
    console.log("utility-meter initialized");
    this.utilityMeterService.getMyUtilityMeters().subscribe({
      next: page => {
        this.utilityMetersSubject.next(page.content);
      }
    });

    this.resourceTypeService.getAll().subscribe({
      next: (data) => {
        this.resourceTypeSubject.next(data);
      },
      error(e: HttpErrorResponse) {
        console.log(e.error)
      }
    });

    this.utilityMeterTypeService.getAll().subscribe({
      next: (data) => {
        this.utilityMeterTypeSubject.next(data);
      },
      error(e: HttpErrorResponse) {
        console.log(e.error)
      }
    });

  }

  onSubmit() {
    if (!this.utilityMeterForm.valid) {
      console.error("form not valid")
      return;
    }
    let params: UtilityMeterFilterReduced = this.utilityMeterForm.value;

    this.utilityMeterService.getMyUtilityMeters(params).subscribe({
      next: page => {
        this.utilityMetersSubject.next(page.content);
      }
    });
  }

  resetForm() {
    this.utilityMeterForm.reset();
  }
}
