import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientMailPage } from './client-mail.page';

const routes: Routes = [
  {
    path: '',
    component: ClientMailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientMailPageRoutingModule {}
