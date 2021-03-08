import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConversionPagePage } from './conversion-page.page';

const routes: Routes = [
  {
    path: '',
    component: ConversionPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConversionPagePageRoutingModule {}
