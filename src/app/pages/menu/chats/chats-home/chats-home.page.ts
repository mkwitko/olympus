import { Component, OnInit } from '@angular/core';
import { Chat } from 'src/app/classes/chat/chat';
import { User } from 'src/app/classes/user/user';
import { NavigationService } from 'src/app/services/navigation/navigation.service';

@Component({
  selector: 'app-chats-home',
  templateUrl: './chats-home.page.html',
  styleUrls: ['./chats-home.page.scss'],
})
export class ChatsHomePage implements OnInit {

  constructor(
    public userClass: User,
    public chatClass: Chat,
    private navigation: NavigationService
  ) { }

  ngOnInit() {
    const chats = this.chatClass.getMyChats();
  }

  goTo(id: string){
    this.navigation.callToChat(id);
  }

}
