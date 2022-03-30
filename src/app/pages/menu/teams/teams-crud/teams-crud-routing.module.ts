import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamsCrudPage } from './teams-crud.page';

const routes: Routes = [
  {
    path: '',
    component: TeamsCrudPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamsCrudPageRoutingModule {}
