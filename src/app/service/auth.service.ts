import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TypeLoginRequest, TypeLoginResponse } from '../types/Auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  signin(data: TypeLoginRequest): Observable<TypeLoginResponse> {
    return this.http.post<TypeLoginResponse>(environment.signin,data)
  }
}
