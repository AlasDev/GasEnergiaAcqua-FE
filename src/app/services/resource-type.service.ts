import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs';
import {ResourceType} from '../utils/resourceType';

@Injectable({
  providedIn: 'root'
})
export class ResourceTypeService {

  constructor(private http: HttpClient, private authService: AuthService) {}

  private baseUrl: string = 'http://localhost:8080/api/resourceType';

  public getAll(): Observable<ResourceType[]> {
    const httpHeaders = this.authService.getAuthHeader()

    return this.http.get<ResourceType[]>(`${this.baseUrl}/all`, {headers: httpHeaders})
  }
}
