import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs';
import {UtilityMeterType} from '../utils/utilityMeter';

@Injectable({
  providedIn: 'root'
})
export class UtilityMeterTypeService {

  constructor(private http: HttpClient, private authService: AuthService) {}

  private baseUrl: string = 'http://localhost:8080/api/utilityMeterType';

  public getAll(): Observable<UtilityMeterType[]> {
    const httpHeaders = this.authService.getAuthHeader()

    return this.http.get<UtilityMeterType[]>(`${this.baseUrl}/all`, {headers: httpHeaders})
  }
}
