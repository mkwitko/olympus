import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { ModalNotificationPageRoutingModule } from './modal-notification-routing.module';

import { ModalNotificationPage } from './modal-notification.page';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ModalNotificationPageRoutingModule,
    FormsModule
  ],
  declarations: [ModalNotificationPage]
})
export class ModalNotificationPageModule {}
