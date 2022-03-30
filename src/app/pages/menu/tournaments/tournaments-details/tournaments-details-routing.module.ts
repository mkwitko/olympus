import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TournamentsDetailsPage } from './tournaments-details.page';

const routes: Routes = [
  {
    path: '',
    component: TournamentsDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TournamentsDetailsPageRoutingModule {}
