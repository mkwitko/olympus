import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TournamentsHomePage } from './tournaments-home.page';

const routes: Routes = [
  {
    path: '',
    component: TournamentsHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TournamentsHomePageRoutingModule {}
