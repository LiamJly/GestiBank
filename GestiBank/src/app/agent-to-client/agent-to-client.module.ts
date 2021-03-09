import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgentToClientPageRoutingModule } from './agent-to-client-routing.module';

import { AgentToClientPage } from './agent-to-client.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgentToClientPageRoutingModule
  ],
  declarations: [AgentToClientPage]
})
export class AgentToClientPageModule {}
