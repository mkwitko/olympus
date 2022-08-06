import { MyHeaderModule } from './../../../../components/headers/my-header/my-header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeamsHomePageRoutingModule } from './teams-home-routing.module';

import { TeamsHomePage } from './teams-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeamsHomePageRoutingModule,
    MyHeaderModule
  ],
  declarations: [TeamsHomePage]
})
export class TeamsHomePageModule {}
