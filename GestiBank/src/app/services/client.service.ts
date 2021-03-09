

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  baseurl: string = 'http://localhost:85/';

  valeur:string = ""
  rand
  alphabet: string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ12345678910";



  constructor(private http: HttpClient) {}

  public addClient(client: any) {
    return this.http.post(this.baseurl+'client/add/', client);
  }

  public genPass(){
    this.rand= Math.random();
        let interPWD= "";
        this.valeur = interPWD;
        for( let i:number = 0; i< 5; i++){
             let k = Math.floor( Math.random() * Math.floor(this.alphabet.length));   
            this.valeur = this.valeur + this.alphabet.charAt(k);
        }
        return(this.valeur);
  }
}
