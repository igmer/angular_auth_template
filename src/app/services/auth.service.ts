import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginRequest, LoginResponse} from "../interfaces/interfaces";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = environment.baseUrl;

  constructor(private http: HttpClient) {}
  login(login: LoginRequest) {
    return this.http.post<LoginResponse>(`${this.url}/api/v1/auth/login`, login)
  }
}
