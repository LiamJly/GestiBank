import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreationPagePage } from './creation-page.page';

const routes: Routes = [
  {
    path: '',
    component: CreationPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreationPagePageRoutingModule {}
