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
  nom:String;
  prenom:string;

  constructor(private client: ClientService, private agent: AgentService) {}

  ngOnInit() {
    this.getListClient()
  }


  getListClient(){
    this.client.getClient().subscribe(
      (res)=>{
        this.myClientList = res
        console.log(this.myClientList)
        
      })
  }

  affecter(){
    //do a put methode which add agent and change status
  }
}
