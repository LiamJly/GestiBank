import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  

  private baseurl: string = 'http://localhost:85/';

  constructor(private http: HttpClient) {}

  public getUser(email) {
    return this.http.get(this.baseurl+"user/"+email);
  }
}
