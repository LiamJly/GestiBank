import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientMailPageRoutingModule } from './client-mail-routing.module';

import { ClientMailPage } from './client-mail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientMailPageRoutingModule
  ],
  declarations: [ClientMailPage]
})
export class ClientMailPageModule {}
