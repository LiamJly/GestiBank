
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseurl: string = 'http://localhost:85/';
  private loggerNom: string = '';
  private loggerPrenom: string = '';
  private loggerLogin: string = '';

  constructor(private http: HttpClient) {}

  public getUser(email: string) {
    return this.http.get(this.baseurl + 'user/' + email + '/');
  }

  tologgout() {
    this.setLogin('');
    this.setName('');
    this.setPrenom('');
  }



  getName() {
    return this.loggerNom;
  }

  setName(nomInput: string) {
    this.loggerNom = nomInput;
  }

  getPrenom() {
    return this.loggerPrenom;
  }

  setPrenom(prenomInput: string) {
    this.loggerPrenom = prenomInput;
  }

  getLogin() {
    return this.loggerLogin;
  }

  setLogin(loginInput: string) {
    this.loggerLogin = loginInput;
  }
}
