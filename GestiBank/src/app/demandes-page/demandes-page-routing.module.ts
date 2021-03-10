import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemandesPagePage } from './demandes-page.page';

const routes: Routes = [
  {
    path: '',
    component: DemandesPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemandesPagePageRoutingModule {}
