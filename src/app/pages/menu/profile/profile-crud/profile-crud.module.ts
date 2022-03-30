import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileCrudPageRoutingModule } from './profile-crud-routing.module';

import { ProfileCrudPage } from './profile-crud.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileCrudPageRoutingModule
  ],
  declarations: [ProfileCrudPage]
})
export class ProfileCrudPageModule {}
