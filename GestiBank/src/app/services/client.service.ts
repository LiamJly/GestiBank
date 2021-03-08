import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  baseurl: string = 'http://localhost:85/';

  constructor(private http: HttpClient) {}

  public addClient(client: any) {
    return this.http.post(this.baseurl+'client/add/', client);
  }
}
