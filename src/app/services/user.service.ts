import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import UserInterface from "../interfaces/UserInterface";
import {StorageService} from "./storage.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = environment.baseUrl;
  constructor(private http: HttpClient,private lStorage: StorageService) {}
  getAll() {
    //TODO implement interceptor for token
    const token = this.lStorage.getToken();
    const headers= {
      'Authorization': `Bearer ${token}`
    }
    return this.http.get<UserInterface[]>(`${this.url}/api/v1/user/`,{headers})
  }
}
