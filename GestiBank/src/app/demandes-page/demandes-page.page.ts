import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { AgentService } from '../services/agent.service';

@Component({
  selector: 'app-demandes-page',
  templateUrl: './demandes-page.page.html',
  styleUrls: ['./demandes-page.page.scss'],
})
export class DemandesPagePage implements OnInit {
mesDemandes;
newStatus;
  constructor(private client : ClientService, private router: Router, private user: UserService, private agent : AgentService) { }

logIN = this.user
mLOG

  ngOnInit() {
    this.mLOG = this.logIN.getPrenom() + ' ' + this.logIN.getName().toUpperCase();
    this.displayDemandes()
  }
displayDemandes(){
  //this.client.getClientAttente().subscribe(
  this.agent.getMyClients(this.logIN.getLogin()).subscribe(
    (res)=>{
      // console.log(res);
       this.mesDemandes = res;
    })
}

refreshPage(){
  //this.router.navigate(['/demandes-page']);
  this.displayDemandes();
}

validateDemande(mail){
this.newStatus = {
status : "valide"
}
this.client.updateClient(mail, this.newStatus).subscribe(
  res => this.refreshPage()
  )}

}
