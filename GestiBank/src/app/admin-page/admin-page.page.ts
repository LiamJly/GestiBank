import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.page.html',
  styleUrls: ['./admin-page.page.scss'],
})
export class AdminPagePage implements OnInit {
  constructor(private router: Router, private user: UserService) {}
  mLOG
  logIN = this.user

  ngOnInit() {
   this.mLOG = this.logIN.getPrenom() +' '+ this.logIN.getName().toUpperCase()
  }

  toListAgent() {
    this.router.navigate(['/list-agents']);
  }

  agentToClient(){
    this.router.navigate(['/agent-to-client']);
  }

  deconnexion(){
    this.logIN.tologgout();
    this.router.navigate(['/home']);
  }
  
}
