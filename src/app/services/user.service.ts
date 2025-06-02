import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {User} from '../utils/user';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl: string = 'http://localhost:8080/api/user';

  constructor(private http: HttpClient, private router: Router, private authService: AuthService) { }

  public getLoggedUser(): Observable<User> {
    const httpHeaders = this.authService.getAuthHeader()
    return this.http.get<User>(`${this.baseUrl}/profile`, {headers: httpHeaders})
  }
}
