import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LoginSuccessfulResponseMessage, ResponseMessage} from '../responses/responseMessage';
import {BehaviorSubject, Observable} from 'rxjs';
import {ToastHandlerService} from './toast-handler.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = 'http://localhost:8080/api/auth';
  public _loginStatus: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public loginStatus$: Observable<boolean> = this._loginStatus.asObservable();

  constructor(private http: HttpClient, private router: Router, private toastHandler: ToastHandlerService) {}

  login(email: string, password: string) {
    this.http.post<LoginSuccessfulResponseMessage>(`${this.baseUrl}/login`, {email, password}).subscribe({
      next: (response) => {
        console.log("response: " + response.message);
        if (response.token != null) {
          localStorage.setItem('token', response.token);
          this._loginStatus.next(true)
          this.toastHandler.showSuccessMessage(response.message);
        }
        this.router.navigate(['homepage']);
      }
    })
  }

  register(name: string, surname: string, email: string, password: string) {
    this.http.post<ResponseMessage>(`${this.baseUrl}/register`, {name, surname, email, password}).subscribe({
      next: (response) => {
        console.log("response: " + response.message);
        this.toastHandler.showInfoMessage(response.message);
      }
    })
  }

  public logout() {
    localStorage.removeItem('token');
    this._loginStatus.next(false);
  }

  public isLogged(): boolean {
    if (localStorage.getItem("token") != null) {
      this._loginStatus.next(true)
      return true
    } else {
      this.logout();
      this._loginStatus.next(false);
      this.router.navigate(['login']);
      return false;
    }
  }

  public isTokenValid(): boolean {
    if (localStorage.getItem("token") != null) {
      const httpHeaders = this.getAuthHeader()
      this.http.post<boolean>(`${this.baseUrl}/tokenValidation`, {headers: httpHeaders}).subscribe({
        next: (response) => {
          console.log("token isValid: " + response);
          return response;
        }
      })
    }
    return false
  }

  public getAuthHeader(): HttpHeaders {
    return new HttpHeaders({
      Authorization: localStorage.getItem("token") as string
    })
  }
}
