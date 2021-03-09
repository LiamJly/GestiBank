import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EspaceAgentPage } from './espace-agent.page';

const routes: Routes = [
  {
    path: '',
    component: EspaceAgentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EspaceAgentPageRoutingModule {}
