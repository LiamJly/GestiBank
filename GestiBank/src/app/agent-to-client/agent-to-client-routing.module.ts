import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgentToClientPage } from './agent-to-client.page';

const routes: Routes = [
  {
    path: '',
    component: AgentToClientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgentToClientPageRoutingModule {}
