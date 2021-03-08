import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

Api_url = "http://api.currencylayer.com/convert?access_key=b5811ef92e6c135ac6ae1598d91a5c6a"
  constructor(private httpClient: HttpClient) { }

  /*getConversion(){
    return this.httpClient.get(`${this.Api_url}`)
  }*/
}
