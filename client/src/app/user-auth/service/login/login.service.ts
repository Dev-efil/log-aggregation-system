import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  _url = 'http://localhost:3500/api/v1/auth/login';
  constructor(private _http: HttpClient) { }

  login(userCredential) {
    return this._http.post<any>(this._url, userCredential);
  }
}