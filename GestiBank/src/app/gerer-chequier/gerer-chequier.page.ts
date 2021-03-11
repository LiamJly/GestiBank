import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgentService } from '../services/agent.service';
import { ClientService } from '../services/client.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-gerer-chequier',
  templateUrl: './gerer-chequier.page.html',
  styleUrls: ['./gerer-chequier.page.scss'],
})
export class GererChequierPage implements OnInit {
  decisions;
  logIN = this.user;

  constructor(
    private client: ClientService,
    private router: Router,
    private user: UserService,
    private agent: AgentService
  ) {}

  ngOnInit() {
    this.displayDecisions();
  }

  displayDecisions() {
    //this.client.getClientAttente().subscribe(
    this.agent.getMyClientsValide(this.logIN.getLogin()).subscribe((res) => {
      this.decisions = res;
    });
  }

  refreshPage() {
    //this.router.navigate(['/demandes-page']);
    this.displayDecisions();
  }

  sendDecision(){
    
  }
}
