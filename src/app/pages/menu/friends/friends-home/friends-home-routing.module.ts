import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FriendsHomePage } from './friends-home.page';

const routes: Routes = [
  {
    path: '',
    component: FriendsHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FriendsHomePageRoutingModule {}
