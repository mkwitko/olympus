import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatsDetailsPage } from './chats-details.page';

const routes: Routes = [
  {
    path: '',
    component: ChatsDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatsDetailsPageRoutingModule {}
