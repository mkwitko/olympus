import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TournamentsHomePageRoutingModule } from './tournaments-home-routing.module';

import { TournamentsHomePage } from './tournaments-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TournamentsHomePageRoutingModule
  ],
  declarations: [TournamentsHomePage]
})
export class TournamentsHomePageModule {}
