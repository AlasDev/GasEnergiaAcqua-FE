import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {UtilityMeter, UtilityMeterFilterReduced} from '../utils/utilityMeter';
import {PageDTO} from '../utils/page';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UtilityMeterService {

  private baseUrl: string = 'http://localhost:8080/api/utilityMeter';

  constructor(private http: HttpClient, private authService: AuthService) { }

  public getMyUtilityMeters(filterParams?: UtilityMeterFilterReduced): Observable<PageDTO<UtilityMeter>> {
    const httpHeaders = this.authService.getAuthHeader();

    let params = new HttpParams();

    if (filterParams != null) {
      if (filterParams.resourceTypeId != null) {
        params = params.set('resourceTypeId', filterParams.resourceTypeId);
      }
      if (filterParams.utilityMeterTypeId != null) {
        params = params.set('utilityMeterTypeId', filterParams.utilityMeterTypeId);
      }
      if (filterParams.servicePointIdentifier != null) {
        params = params.set('servicePointIdentifier', filterParams.servicePointIdentifier);
      }
      if (filterParams.serialNumber != null) {
        params = params.set('serialNumber', filterParams.serialNumber);
      }
      if (filterParams.meterName != null) {
        params = params.set('meterName', filterParams.meterName);
      }
      if (filterParams.fromInstallationDateAt != null) {
        params = params.set('fromInstallationDateAt', filterParams.fromInstallationDateAt.toString());
      }
      if (filterParams.toInstallationDateAt != null) {
        params = params.set('toInstallationDateAt', filterParams.toInstallationDateAt.toString());
      }
    }

    return this.http.get<PageDTO<UtilityMeter>>(`${this.baseUrl}/my-utility-meters`, {
      headers: httpHeaders,
      params: params
    });
  }
}
