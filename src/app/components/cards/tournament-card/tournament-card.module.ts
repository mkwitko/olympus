import { TournamentCardComponent } from './tournament-card.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TournamentCardComponent],
  imports: [CommonModule, IonicModule, FormsModule],
  exports: [TournamentCardComponent],
  providers: []
})

export class MyTournamentCardModule{
}
