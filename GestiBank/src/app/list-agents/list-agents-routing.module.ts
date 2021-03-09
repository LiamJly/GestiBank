import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListAgentsPage } from './list-agents.page';

const routes: Routes = [
  {
    path: '',
    component: ListAgentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListAgentsPageRoutingModule {}
