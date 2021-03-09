import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EspaceAgentPageRoutingModule } from './espace-agent-routing.module';

import { EspaceAgentPage } from './espace-agent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EspaceAgentPageRoutingModule
  ],
  declarations: [EspaceAgentPage]
})
export class EspaceAgentPageModule {}
