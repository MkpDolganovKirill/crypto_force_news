import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Auth, AuthResponse } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isUserAuthenticated = new BehaviorSubject(false);

  constructor(private httpClient: HttpClient) {}

  isAuthenticated(): boolean {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');
    const userName = localStorage.getItem('userName');
    return accessToken && refreshToken && userName ? true : false;
  }

  signIn(body: Auth): Observable<AuthResponse> {
    return this.httpClient.post<AuthResponse>(
      `${environment.backendLink}/user/authorizationUser`,
      body
    );
  }

  signUp(body: Auth): Observable<AuthResponse> {
    return this.httpClient.post<AuthResponse>(
      `${environment.backendLink}/user/createNewUser`,
      body
    );
  }
}
