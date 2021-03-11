import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(private router: Router, private user: UserService) {}

  mLOG;
  logIN;
  role;

  ngOnInit() {
    this.logIN = this.user;
    this.mLOG =
      this.logIN.getPrenom() + '  ' + this.logIN.getName().toUpperCase();
    this.role = this.logIN.getRole;
  }

  toNewConnexion() {
    this.router.navigate(['/connexion-page']);
  }

  toNewCompte() {
    this.router.navigate(['/creation-page']);
  }

  toConversion() {
    this.router.navigate(['/conversion-page']);
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

  directionToRole() {
    switch (this.role) {
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
  }
}
