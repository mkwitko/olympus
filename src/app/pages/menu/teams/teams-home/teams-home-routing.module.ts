import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamsHomePage } from './teams-home.page';

const routes: Routes = [
  {
    path: '',
    component: TeamsHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamsHomePageRoutingModule {}
