import { MyHeaderModule } from './../../../../components/headers/my-header/my-header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatsHomePageRoutingModule } from './chats-home-routing.module';

import { ChatsHomePage } from './chats-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatsHomePageRoutingModule,
    MyHeaderModule
  ],
  declarations: [ChatsHomePage]
})
export class ChatsHomePageModule {}
