import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FriendsCrudPage } from './friends-crud.page';

const routes: Routes = [
  {
    path: '',
    component: FriendsCrudPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FriendsCrudPageRoutingModule {}
