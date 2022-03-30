import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MyHeaderComponent } from './my-header.component';

@NgModule({
  declarations: [MyHeaderComponent],
  imports: [CommonModule, IonicModule, TranslateModule],
  exports: [MyHeaderComponent],
  providers: []
})

export class MyHeaderModule{
}
