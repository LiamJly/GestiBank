<<<<<<< HEAD
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
=======
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
>>>>>>> c562e191f83d4febcf0d37ebf8fea6b55faa7405
