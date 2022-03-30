import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from 'src/app/classes/user/user';
import { Chat } from 'src/app/classes/chat/chat';
import { Tournament } from 'src/app/classes/tournament/tournament';
import { Team } from 'src/app/classes/team/team';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [
    User,
    Chat,
    Tournament,
    Team
  ]
})
export class ClassesModule { }
