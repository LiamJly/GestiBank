import { Component, OnInit } from '@angular/core';
import { AgentService } from '../services/agent.service';

@Component({
  selector: 'app-list-agents',
  templateUrl: './list-agents.page.html',
  styleUrls: ['./list-agents.page.scss'],
})
export class ListAgentsPage implements OnInit {
mesAgents;
  constructor(private agent: AgentService) { }

  ngOnInit() {
    this.displayAgents(); 
  }

  displayAgents(){
    this.agent.getAgents().subscribe(
      (res)=>{
       // console.log(res);
        this.mesAgents = res;
        console.log(this.mesAgents);
      }
    )
  }
}
