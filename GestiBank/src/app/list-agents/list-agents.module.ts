import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListAgentsPageRoutingModule } from './list-agents-routing.module';

import { ListAgentsPage } from './list-agents.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListAgentsPageRoutingModule
  ],
  declarations: [ListAgentsPage]
})
export class ListAgentsPageModule {}
