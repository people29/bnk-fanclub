import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Credential } from '../models/credential';
import { AuthResponse } from '../models/auth-response';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  authen(credential: Credential): Observable<AuthResponse> {
    return  this.http.post<AuthResponse>(`${environment.api_url}/auth/login`, credential);
  }

}
