import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demandes-page',
  templateUrl: './demandes-page.page.html',
  styleUrls: ['./demandes-page.page.scss'],
})
export class DemandesPagePage implements OnInit {
mesDemandes;
newStatus;
  constructor(private client : ClientService, private router: Router) { }

  ngOnInit() {
    this.displayDemandes()
  }
displayDemandes(){
  this.client.getClientAttente().subscribe(
    (res)=>{
      // console.log(res);
       this.mesDemandes = res;
    })
}

refreshPage(){
  this.router.navigate(['/demandes-page']);
}

validateDemande(mail){
this.newStatus = {
status : "valide"
}
this.client.updateClient(mail, this.newStatus).subscribe();
this.refreshPage()
}

}
