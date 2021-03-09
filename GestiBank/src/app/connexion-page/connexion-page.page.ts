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
  myLogger;

  constructor(
    private user: UserService,
    private toastController: ToastController,
    private router: Router,
  ) {}

  ngOnInit() {}

  seConnecter() {
    console.log(this.email);
    this.user.getUser(this.email).subscribe((response) => {
      this.myLogger = response;
      console.log(this.myLogger);
      console.log(this.myLogger[0].motpass);
      this.authent(this.myLogger[0]);
    });
  }

  authent(logger) {
    let verif = logger.motpass;
    if (verif == this.motpass) {
      console.log('connexion a la page  ' + logger.role.toUpperCase());
      this.email = '';
      this.motpass = null;
      switch (logger.motpass) {
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
    this.router.navigate(['/agent-page']);
  }
}

