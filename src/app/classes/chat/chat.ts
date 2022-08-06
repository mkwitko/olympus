import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { UuidGenService } from './../../services/uuids/uuid-gen.service';
import { Injectable } from '@angular/core';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { UserInterface } from 'src/app/interfaces/auth/user';
import { ChatInterface } from 'src/app/interfaces/chats/chat';
import { AuthService } from 'src/app/services/firebase/auth/auth.service';
import { CrudService } from 'src/app/services/firebase/crud/crud.service';
import { UserChatService } from 'src/app/services/user-functions/user-chat/user-chat.service';

@Injectable()
export class Chat {

  public allChats = new Array<ChatInterface>();
  public myChats = new Array<ChatInterface>();
  public collection: AngularFirestoreCollection;
  public ref = 'Chats';
  public chat: ChatInterface = {};

  constructor(
    private crud: CrudService,
    private auth: AuthService,
    private uuid: UuidGenService,
    private navigation: NavigationService
  )
  {
    this.collection = this.crud.callCollectionConstructor(this.ref);
  }

  getMyChats(): Promise<any>{
    return new Promise((resolve) => {
      if(this.allChats){
        this.myChats = [];
        if(this.allChats.length > 0){
          for(const a of this.allChats){
            if(a.users.includes(this.auth.id)){
              this.myChats.push(a);
            }
          }
          resolve(this.myChats);
        }
      }
    });
  }

  getChat(chatId: string){
    if(this.allChats){
      if(this.allChats.length > 0){
        for(const a of this.allChats){
          if(a.id === chatId){
            return a;
          }
        }
      }
    }
  }

  getUsersIdInChat(chatId: string){
    let users = new Array<string>();
    users = [];

    if(this.allChats){
      if(this.allChats.length > 0){
        for(const a of this.allChats){
          if(a.id === chatId) { // Encontrando o chat
            for(const b of a.users){
              users.push(b);
            }
          }
        }
        return users;
      }
    }
  }

  getUsernameInChat(chatId: string){
    let users = new Array<string>();
    users = [];

    if(this.allChats){
      if(this.allChats.length > 0){
        for(const a of this.allChats){
          if(a.id === chatId) { // Encontrando o chat
            for(const b of a.usernames){
              users.push(b);
            }
          }
        }
        return users;
      }
    }
  }

  getChatWithFriend(friendId: string){
    if(this.myChats){
      if(this.myChats.length > 0){
        for(const a of this.myChats){
          for(const b of a.users){
            if(friendId === b && a.users.length === 2){
              return a;
            }
          }
        }
      }
    }
  }

  createChatWithFriend(friend: UserInterface, mySelf: UserInterface){
    this.chat.users = [];
    this.chat.usernames = [];

    this.chat.users.push(friend.id);
    this.chat.users.push(mySelf.id);

    this.chat.usernames.push(friend.userName);
    this.chat.usernames.push(mySelf.userName);

    this.chat.createdAt = new Date().getTime();
    this.chat.id = this.uuid.genID();

    this.crud.addChat(this.chat, this.chat.id, this.collection);
    this.navigation.callToChat(this.chat.id);
  }

  deleteChat(id: string){
    const chatToDelete = this.getChat(id);
    this.crud.callDelete(this.collection, chatToDelete.id);
  }

}
