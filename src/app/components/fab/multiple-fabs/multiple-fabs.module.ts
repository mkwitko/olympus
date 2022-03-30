import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultipleFabsComponent } from './multiple-fabs.component';

@NgModule({
  declarations: [MultipleFabsComponent],
  imports: [CommonModule, IonicModule],
  exports: [MultipleFabsComponent],
  providers: []
})

export class MyMultipleFabsModule{}
