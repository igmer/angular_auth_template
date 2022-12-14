import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginRequest,LoginResponse} from "../interfaces/interfaces";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = 'http://localhost:8080/api/v1/auth/login';

  constructor(private http: HttpClient) {
  }

  login(login: LoginRequest) {
   return this.http.post<LoginResponse>(this.url, login)
  }

}
