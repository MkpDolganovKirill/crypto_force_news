import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SIGNIN_ROUTE, SIGNUP_ROUTE } from '@constants/auth-service.constants';
import { LocalStorageValue } from '@enums/authPage.enums';
import { Auth, AuthResponse } from '@interfaces/auth.interface';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isUserAuthenticated = new BehaviorSubject(false);

  constructor(private httpClient: HttpClient) {}

  isAuthenticated(): boolean {
    const accessToken = localStorage.getItem(LocalStorageValue.ACCESSTOKEN);
    const refreshToken = localStorage.getItem(LocalStorageValue.REFRESHTOKEN);
    const userName = localStorage.getItem(LocalStorageValue.USERNAME);
    return !!(accessToken && refreshToken && userName);
  }

  signUp(body: Auth): Observable<AuthResponse> {
    return this.httpClient.post<AuthResponse>(
      `${environment.backendLink}/user${SIGNUP_ROUTE}`,
      body
    );
  }

  signIn(body: Auth): Observable<AuthResponse> {
    return this.httpClient.post<AuthResponse>(
      `${environment.backendLink}/user${SIGNIN_ROUTE}`,
      body
    );
  }
}
