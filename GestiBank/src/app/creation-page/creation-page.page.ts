import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-creation-page',
  templateUrl: './creation-page.page.html',
  styleUrls: ['./creation-page.page.scss'],
})
export class CreationPagePage implements OnInit {
  constructor(private client: ClientService, private router: Router, private toastController: ToastController) {}
  nom: string;
  prenom: string;
  email: string;
  tel: number;
  myClient;
  validation;

  ngOnInit() {
    this.validation= "favorite"
  }

  envoyer() {
    this.validation = 'primary';
    this.myClient = {
      nom: this.nom,
      prenom: this.prenom,
      email: this.email,
      tel: this.tel,
      role: 'client',
      status: 'en attente',
      motpass: this.client.genPass(), 
    };
    
    if (
      this.nom != '' &&
      this.prenom != '' &&
      this.email != '' &&
      this.tel != null
    ) {
      console.log(this.myClient);
      this.client.addClient(this.myClient).subscribe();
      this.presentToastOK()
      this.toConnectPage();
    } else {
      this.presentToastNOK()
    }
    this.validation="favorite"
  }

  toConnectPage() {
    this.router.navigate(['/connexion-page']);
  }

  async presentToastOK() {
    const toast = await this.toastController.create({
      message: 'Vous etes inscrit, felicitation',
      color: 'success',
      duration: 2000,
    });
    toast.present();
  }

  async presentToastNOK() {
    const toast = await this.toastController.create({
      message: "Remplir tout les champs s'il vous plait!",
      color: 'warning',
      duration: 2000,
    });
    toast.present();
  }
}
