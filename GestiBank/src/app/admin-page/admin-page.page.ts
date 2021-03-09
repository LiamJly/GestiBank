import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.page.html',
  styleUrls: ['./admin-page.page.scss'],
})
export class AdminPagePage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  toListAgent() {
    this.router.navigate(['/list-agents']);
  }

  agentToClient(){
    this.router.navigate(['/agent-to-client']);
  }

  
}
