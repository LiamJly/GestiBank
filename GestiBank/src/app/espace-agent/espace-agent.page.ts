import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../services/client.service';


@Component({
  selector: 'app-espace-agent',
  templateUrl: './espace-agent.page.html',
  styleUrls: ['./espace-agent.page.scss'],
})
export class EspaceAgentPage implements OnInit {

  constructor(private router: Router, private client: ClientService ) { }

  ngOnInit() {
  }
  toDemandesPage() {
    this.router.navigate(['/demandes-page']);
  }
}
