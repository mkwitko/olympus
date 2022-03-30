import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Chat } from 'src/app/classes/chat/chat';
import { User } from 'src/app/classes/user/user';
import { ChatInterface } from 'src/app/interfaces/chats/chat';
import { CrudService } from 'src/app/services/firebase/crud/crud.service';
import { NavigationService } from 'src/app/services/navigation/navigation.service';

@Component({
  selector: 'app-chats-details',
  templateUrl: './chats-details.page.html',
  styleUrls: ['./chats-details.page.scss'],
})
export class ChatsDetailsPage implements OnDestroy {

  public title;
  public namesInChat = new Array<string>();

  public message = '';

  public buttonDisable = true;

  public chat: ChatInterface;

  private routeId;
  private sub: Subscription;

  constructor(
    public chatClass: Chat,
    public userClass: User,
    private activeRoute: ActivatedRoute,
    private navigation: NavigationService,
    private crud: CrudService
  )
  {
    this.routeId = this.activeRoute.snapshot.params.id;
    this.load(this.routeId);

    this.sub = this.crud.callGet(this.chatClass.collection, this.chat, this.routeId).subscribe(res => {
      this.chat = res;
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  load(routeId: string){
    this.chat = this.chatClass.getChat(routeId);
    if(this.chat === undefined){
      this.navigation.callChangePage('chats-home');
    }
    this.namesInChat = this.chatClass.getUsernameInChat(this.chat.id);
    this.setTitle();
  }

  setTitle(){
    if(this.namesInChat.length === 2){
      this.title = this.namesInChat[0];
    }
  }

  send(){
    //this.userChat.sendMessage(this.message, this.userClass.myInfo, this.chat);
    this.message = '';
  }

  enableDisableButton(){
    if(this.message.length > 0){
      this.buttonDisable = false;
    } else {
      this.buttonDisable = true;
    }
  }

}
