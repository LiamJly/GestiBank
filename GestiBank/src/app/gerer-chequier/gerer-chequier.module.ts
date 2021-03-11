import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GererChequierPageRoutingModule } from './gerer-chequier-routing.module';

import { GererChequierPage } from './gerer-chequier.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GererChequierPageRoutingModule
  ],
  declarations: [GererChequierPage]
})
export class GererChequierPageModule {}
