
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  baseurl: string = 'http://localhost:85/';

  valeur: string = '';
  rand;
  alphabet: string =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ12345678910';

  constructor(private http: HttpClient) {}

  public addClient(client: any) {
    return this.http.post(this.baseurl + 'client/add/', client);
  }

  public getClient() {
    return this.http.get(this.baseurl + 'client/list/');
  }
  public getClientNoAgent() {
    return this.http.get(this.baseurl + 'client/noAgent/');
  }

  public newClient(email, mdp) {
    return this.http.get(this.baseurl + 'newClient/' + email + '/' + mdp);
  }

  public affectAgent(emailClient, addAgentEmail) {
    let url = 'forClient/' + emailClient;
    return this.http.put(this.baseurl + url, addAgentEmail);
  }

  public genPass() {
    this.rand = Math.random();
    let interPWD = '';
    this.valeur = interPWD;
    for (let i: number = 0; i < 5; i++) {
      let k = Math.floor(Math.random() * Math.floor(this.alphabet.length));
      this.valeur = this.valeur + this.alphabet.charAt(k);
    }
    return this.valeur;
  }

  public getClientbyMail(mail: string) {
    return this.http.get(`${this.baseurl}/${mail}/clients `);
  }

  public getClientAttente() {
    return this.http.get(`${this.baseurl}client/list/attente`);
  }

  public updateClient(mail: string, body) {
    return this.http.put(`${this.baseurl}client/${mail}`, body);
  }
}
