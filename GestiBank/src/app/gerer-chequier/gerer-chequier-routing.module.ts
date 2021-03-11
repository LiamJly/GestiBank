import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GererChequierPage } from './gerer-chequier.page';

const routes: Routes = [
  {
    path: '',
    component: GererChequierPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GererChequierPageRoutingModule {}
