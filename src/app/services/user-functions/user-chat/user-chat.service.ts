import { ChatInterface } from './../../../interfaces/chats/chat';
import { UserInterface } from './../../../interfaces/auth/user';
import { Injectable } from '@angular/core';
import { Chat } from 'src/app/classes/chat/chat';
import { User } from 'src/app/classes/user/user';
import { AuthService } from '../../firebase/auth/auth.service';
import { CrudService } from '../../firebase/crud/crud.service';
import { NavigationService } from '../../navigation/navigation.service';
import { UuidGenService } from '../../uuids/uuid-gen.service';
import { Messages } from 'src/app/interfaces/chats/messages';

@Injectable({
  providedIn: 'root'
})
export class UserChatService {

  constructor(
    private chat: Chat,
    private user: User,
    private auth: AuthService,
    private crud: CrudService,
    private uuid: UuidGenService,
    private navigation: NavigationService,
  ) { }

  sendMessage(message: string, sender: UserInterface, chat: ChatInterface){
    const msg: Messages = {
      message,
      sender: sender.userName,
      senderId: sender.id,
      createdAt: new Date().getTime()
    };

    if(!chat.messages){
      chat.messages = [];
    }

    for(const a of chat.users){
      if(a !== sender.id){
        const userToReceiveMessage = this.user.findUser(a);
        this.receiveNewMessage(userToReceiveMessage, chat);
      }
    }
    chat.messages.push(msg);
    this.crud.callUpdate(this.chat.collection, chat, chat.id);
  }

  receiveNewMessage(user: UserInterface, chat: ChatInterface){
    let newMessageInit = false;
    if(!user.newMessages || user.newMessages.length === 0){
      user.newMessages = [{
        chatId: chat.id,
        quantity: 1
      }];
      newMessageInit = true;
    }
    for(const b of user.newMessages){
      if(b.chatId === chat.id){
        if(b.quantity <= 0){
          b.quantity = 1;
        } else {
          if(!newMessageInit){
            b.quantity++;
          }
        }
      }
    }
    this.crud.callUpdate(this.user.collection, user, user.id);
  }

  getNewMessages(){
    let quantity = 0;
    if(this.user.myInfo.newMessages){
      for(const a of this.user.myInfo.newMessages){
        quantity += a.quantity;
      }
      return quantity;
    }
  }

  getNewMessagesFromChat(id: string){
    if(this.user.myInfo){
      if(this.user.myInfo.newMessages){
        for(const a of this.user.myInfo.newMessages){
          if(a.chatId === id){
            return a.quantity;
          }
        }
      }
    }
  }

  resetNewMessagesFromChat(id: string){
    const chat = this.chat.getChat(id);
    const user = this.user.findUser(this.auth.id);
    if(user.newMessages){
      for(const a of user.newMessages){
        if(a.chatId === chat.id){
          a.quantity = 0;
          this.crud.callUpdate(this.user.collection, user, user.id);
          chat.newMessage = this.getNewMessagesFromChat(chat.id);
        }
      }
    }
  }

  deleteNewMessagesFromChat(chatId: string, friendId: string){
    const me = this.user.myInfo;
    const friendToDelete = this.user.findUser(friendId);

    let indexMe = 0;
    let indexFriend = 0;
    for(const a of me.newMessages){
      if(a.chatId === chatId){
        me.newMessages.splice(indexMe, 1);
        this.crud.callUpdate(this.user.collection, me, me.id);
      }
      indexMe++;
    }

    for(const a of friendToDelete.newMessages){
      if(a.chatId === chatId){
        friendToDelete.newMessages.splice(indexFriend, 1);
        this.crud.callUpdate(this.user.collection, friendToDelete, friendToDelete.id);
      }
      indexFriend++;
    }
  }
}
