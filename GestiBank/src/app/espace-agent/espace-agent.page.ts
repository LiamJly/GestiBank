import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../services/client.service';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-espace-agent',
  templateUrl: './espace-agent.page.html',
  styleUrls: ['./espace-agent.page.scss'],
})
export class EspaceAgentPage implements OnInit {
  constructor(
    private router: Router,
    private client: ClientService,
    private user: UserService
  ) {}

  logIN = this.user;
  mLOG;

  ngOnInit() {
    this.mLOG =
      this.logIN.getPrenom() + ' ' + this.logIN.getName().toUpperCase();
      
  }
  toDemandesPage() {
    this.router.navigate(['/demandes-page']);
  }

  deconnexion() {
    this.logIN.tologgout();
    this.router.navigate(['/home']);
  }
}
