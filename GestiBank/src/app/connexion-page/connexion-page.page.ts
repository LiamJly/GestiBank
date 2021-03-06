import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion-page',
  templateUrl: './connexion-page.page.html',
  styleUrls: ['./connexion-page.page.scss'],
})
export class ConnexionPagePage implements OnInit {
  private email: string;
  private motpass: number;
  

  constructor(
    private user: UserService,
    private toastController: ToastController,
    private router: Router,
  ) {}

  myLogger;
  logUser 

  ngOnInit() {
    this.logUser = this.user;
  }

  seConnecter() {
    console.log(this.email);
    this.user.getUser(this.email).subscribe((response) => {
      this.myLogger = response;
      console.log(this.myLogger);
      console.log(this.myLogger[0].motpass);
      this.logUser.setLogin(this.myLogger[0].email);
      this.logUser.setName(this.myLogger[0].nom);
      this.logUser.setPrenom(this.myLogger[0].prenom);
      this.logUser.setRole(this.myLogger[0].role);
      this.authent(this.myLogger[0]);
    });
  }

  authent(logger) {
    let verif = logger.motpass;
    if (verif == this.motpass) {
      console.log('connexion a la page  ' + logger.role.toUpperCase());
      this.email = '';
      this.motpass = null;
      switch (logger.role) {
        case 'admin':
          this.toAdminPage();
          break;
        case 'agent':
          this.toAgentPage();
          break;
        case 'client':
          this.toClientPage();
          break;
      }
    } else {
      console.log('mot de pass !!');
    }
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'LOGIN OR PASSWORD INVALID!',
      color: 'warning',
      duration: 2000,
    });
    toast.present();
  }

  toAdminPage() {
    this.router.navigate(['/admin-page']);
  }

  toClientPage() {
    this.router.navigate(['/client-page']);
  }

  toAgentPage() {
    this.router.navigate(['/espace-agent']);
  }
}

