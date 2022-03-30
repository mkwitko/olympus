import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TournamentsDetailsPageRoutingModule } from './tournaments-details-routing.module';

import { TournamentsDetailsPage } from './tournaments-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TournamentsDetailsPageRoutingModule
  ],
  declarations: [TournamentsDetailsPage]
})
export class TournamentsDetailsPageModule {}
