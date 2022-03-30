import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeamsCrudPageRoutingModule } from './teams-crud-routing.module';

import { TeamsCrudPage } from './teams-crud.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeamsCrudPageRoutingModule
  ],
  declarations: [TeamsCrudPage]
})
export class TeamsCrudPageModule {}
