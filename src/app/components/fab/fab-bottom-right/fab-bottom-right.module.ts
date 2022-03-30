import { FabBottomRightComponent } from './fab-bottom-right.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [FabBottomRightComponent],
  imports: [CommonModule, IonicModule],
  exports: [FabBottomRightComponent],
  providers: []
})

export class MyFabBottomRightModule{}
