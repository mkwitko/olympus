import { TeamCardComponent } from './team-card.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TeamCardComponent],
  imports: [CommonModule, IonicModule, FormsModule],
  exports: [TeamCardComponent],
  providers: []
})

export class MyTeamCardModule{
}
