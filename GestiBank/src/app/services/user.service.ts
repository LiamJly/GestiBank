import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseurl: string = 'http://localhost:85/';

  constructor(private http: HttpClient) {}

  public getUser(email:string) {
    return this.http.get(this.baseurl+"user/"+email+"/");
  }
}
