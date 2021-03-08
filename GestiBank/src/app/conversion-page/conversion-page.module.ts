import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConversionPagePageRoutingModule } from './conversion-page-routing.module';

import { ConversionPagePage } from './conversion-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConversionPagePageRoutingModule
  ],
  declarations: [ConversionPagePage]
})
export class ConversionPagePageModule {}
