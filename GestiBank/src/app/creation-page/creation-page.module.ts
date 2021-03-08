import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreationPagePageRoutingModule } from './creation-page-routing.module';

import { CreationPagePage } from './creation-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreationPagePageRoutingModule
  ],
  declarations: [CreationPagePage]
})
export class CreationPagePageModule {}
