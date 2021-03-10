import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DemandesPagePageRoutingModule } from './demandes-page-routing.module';

import { DemandesPagePage } from './demandes-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DemandesPagePageRoutingModule
  ],
  declarations: [DemandesPagePage]
})
export class DemandesPagePageModule {}
