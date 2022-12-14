import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  saveToken(token: string){
    localStorage.setItem('token',token);
  }
  getToken(){
    return localStorage.getItem('token');
  }
  deleteToken(){
    localStorage.removeItem('token');
  }

  isAuteticated() {
   const token = this.getToken();
   //TODO validate jwt ,exprire date,
   return token != null;
  }
}
