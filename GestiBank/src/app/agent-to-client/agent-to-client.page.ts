import { Component, OnInit } from '@angular/core';
import { AgentService } from '../services/agent.service';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-agent-to-client',
  templateUrl: './agent-to-client.page.html',
  styleUrls: ['./agent-to-client.page.scss'],
})
export class AgentToClientPage implements OnInit {
  myAgentList;
  myClientList;
  nom: String;
  prenom: string;
  monClient;
  value="jliam@test.com"; 

  constructor(private client: ClientService, private agent: AgentService) {}

  ngOnInit() {
    this.getListAgent();
    this.getListClient();
    this.affectAgt(this.value)
  }

  getListClient() {
    this.client.getClient().subscribe((res) => {
      this.myClientList = res;
      console.log(this.myClientList);
    });
  }

  getListAgent() {
    this.agent.getAgents().subscribe((res) => {
      this.myAgentList = res;
      console.log(this.myAgentList);
    });
  }

  affectAgt(val) {
    let affectation = { "agent" : val }
    this.client.affectAgent(val, affectation).subscribe((res) => {
       console.log(res)
       
    });
    
  }

  affecter() {
    //do a put methode which add agent and change status
  }

  triAgent(monClient) {
        
  }
}
