import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import UserInterface from "../interfaces/user.interface";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = environment.baseUrl;
  constructor(private http: HttpClient) {}
  getAll() {
    return this.http.get<UserInterface[]>(`${this.url}/api/v1/user/`)
  }
}
