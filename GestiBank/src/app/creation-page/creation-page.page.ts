import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-creation-page',
  templateUrl: './creation-page.page.html',
  styleUrls: ['./creation-page.page.scss'],
})
export class CreationPagePage implements OnInit {

  constructor(private client : ClientService) { }
  nom: string;
  prenom: string;
  email: string;
  tel: number;
  myClient;

  ngOnInit() {
      this.myClient = {
      nom: this.nom,
      prenom: this.prenom,
      email: this.email,
      tel: this.tel,
      status: "en attente",
      motpass: "2020"                 //implementer un generateur
    };
  }


  envoyer(){
      if(this.nom!="" && this.prenom!="" && this.email!="" && this.tel!=null  ){
        console.log(this.myClient);
        this.client.addClient(this.myClient).subscribe();
      }else{
        console.log("TOAST A IMPLEMENTER : REMPLIR TOUT LES CHAMPS!")
      }
  }
}
