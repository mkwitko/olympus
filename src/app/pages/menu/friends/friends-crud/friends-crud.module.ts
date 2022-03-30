import { MyHeaderModule } from './../../../../components/headers/my-header/my-header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FriendsCrudPageRoutingModule } from './friends-crud-routing.module';

import { FriendsCrudPage } from './friends-crud.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FriendsCrudPageRoutingModule,
    MyHeaderModule
  ],
  declarations: [FriendsCrudPage]
})
export class FriendsCrudPageModule {}
