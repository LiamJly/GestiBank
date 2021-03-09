import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AgentService {
baseurl: string = "http://localhost:85/";
  
constructor(private http: HttpClient) { }

public getAgents(){
  return this.http.get(`${this.baseurl}agent/list`)
}
public deleteAgent(){
  return this.http.delete
}
}
