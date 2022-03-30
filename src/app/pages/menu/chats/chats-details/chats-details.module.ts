import { MyHeaderModule } from 'src/app/components/headers/my-header/my-header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatsDetailsPageRoutingModule } from './chats-details-routing.module';

import { ChatsDetailsPage } from './chats-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatsDetailsPageRoutingModule,
    MyHeaderModule
  ],
  declarations: [ChatsDetailsPage]
})
export class ChatsDetailsPageModule {}
