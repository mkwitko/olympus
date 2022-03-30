import { MyFabBottomRightModule } from './../../../../components/fab/fab-bottom-right/fab-bottom-right.module';
import { MyHeaderModule } from './../../../../components/headers/my-header/my-header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FriendsHomePageRoutingModule } from './friends-home-routing.module';

import { FriendsHomePage } from './friends-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FriendsHomePageRoutingModule,
    MyHeaderModule,
    MyFabBottomRightModule
  ],
  declarations: [FriendsHomePage]
})
export class FriendsHomePageModule {}
