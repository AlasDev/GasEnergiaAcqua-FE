import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {LoginSuccessfulResponseMessage, ResponseMessage} from '../responses/responseMessage';
import {BehaviorSubject} from 'rxjs';
import {FormControl, FormGroup, ɵValue} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = 'http://localhost:8080/api/auth';
  private $loginStatus: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private http: HttpClient, private router: Router) {}

  login(loginForm: FormGroup) {
    this.http.post<LoginSuccessfulResponseMessage>(`${this.baseUrl}/login`, loginForm).subscribe({
      next: (response) => {
        console.log("response: " + response.message);
        if (response.token != null) this.$loginStatus.next(true);
      }
    })
  }

  register(registerForm: FormGroup) {
    this.http.post<ResponseMessage>(`${this.baseUrl}/register`, registerForm).subscribe({
      next: (response) => {
        console.log("response: " + response.message);
      }
    })
  }

  public logout() {
    localStorage.removeItem('token');
    this.$loginStatus.next(false);
  }
}
