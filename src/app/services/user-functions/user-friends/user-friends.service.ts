import { UserChatService } from 'src/app/services/user-functions/user-chat/user-chat.service';
import { UserNotificationService } from './../user-notification/user-notification.service';
import { AuthService } from 'src/app/services/firebase/auth/auth.service';
import { CrudService } from 'src/app/services/firebase/crud/crud.service';
import { ScreenService } from 'src/app/services/screen-effects/screen.service';
import { UserInterface } from 'src/app/interfaces/auth/user';
import { User } from 'src/app/classes/user/user';
import { Injectable } from '@angular/core';
import { Chat } from 'src/app/classes/chat/chat';

@Injectable({
  providedIn: 'root'
})
export class UserFriendsService {

  constructor(
    private userClass: User,
    private chatClass: Chat,
    private userChat: UserChatService,
    private userNotification: UserNotificationService,
    private screen: ScreenService,
    private crud: CrudService,
    private auth: AuthService
  ) { }

  getFriend(){
    if(this.userClass.myInfo){
      if(this.userClass.myInfo.friends){
        if(this.userClass.myInfo.friends.length > 0){
          return this.userClass.myInfo.friends;
        }
      }
    }
  }

  getFriendRequest(){
    if(this.userClass.myInfo){
      if(this.userClass.myInfo.friendsRequests){
        if(this.userClass.myInfo.friendsRequests.length > 0){
          return this.userClass.myInfo.friendsRequests;
        }
      }
    }
  }

  setFriends(){
    if(this.userClass.myInfo){
      if(this.userClass.myInfo.friends){
        this.userClass.friends = [];
        if(this.userClass.myInfo.friends.length > 0){
          for(const a of this.userClass.myInfo.friends){
            const friend = this.userClass.findUser(a);
            this.userClass.friends.push(friend);
          }
        }
      }
    }
  }

  setFriendRequests(){
    if(this.userClass.myInfo){
      if(this.userClass.myInfo.friendsRequests){
        this.userClass.friendsRequests = [];
        if(this.userClass.myInfo.friendsRequests.length > 0){
          for(const a of this.userClass.myInfo.friendsRequests){
            const friend = this.userClass.findUser(a);
            this.userClass.friendsRequests.push(friend);
          }
        }
      }
    }
  }

  findFriend(me: string, to: string){
    const userToSearch = this.userClass.findUser(to);
    const myUser = this.userClass.findUser(me);
    if(userToSearch.friends){
      if(userToSearch.friends.length > 0){
        for(const a of userToSearch.friends){
          if(a === me){
            return myUser;
          } else {
            return false;
          }
        }
      }
    }
  }

  findRequest(me: string, to: string){
    const userToSearch = this.userClass.findUser(to);
    const myUser = this.userClass.findUser(me);
    if(userToSearch.friendsRequests){
      if(userToSearch.friendsRequests.length > 0){
        for(const a of userToSearch.friendsRequests){
          if(a === me){
            return myUser;
          } else {
            return false;
          }
        }
      }
    }
  }

  sendFriendRequest(to: UserInterface, from: string, message: string){
    if(!to.friendsRequests){
      to.friendsRequests = [];
    }

    if(this.findRequest(from, to.id)){
      this.screen.presentToast('Você já enviou um pedido de amizade', '', 'warning');
    }
    if(this.findFriend(from, to.id)){
      this.screen.presentToast('Vocês já são amigos', '', 'warning');
    }
    if(!this.findFriend(from, to.id) && !this.findRequest(from, to.id)){
      to.friendsRequests.push(from);
      try {
        this.crud.callUpdate(this.userClass.collection, to, to.id).then(res => {
          this.screen.presentToast('Seu pedido de amizade foi enviado', '', 'sucess');
          this.userNotification.sendNotification(to.id, message, from, this.userClass.notificationTypes[0]);
        });
      } catch (error){
        this.screen.presentToast(error, '', 'danger');
      }
    }
  }

  acceptRequest(id: string){
    for(const a of this.userClass.friendsRequests){
      if(id === a.id){

        if(!a.friends){
          a.friends = [];
        }
        if(!this.userClass.myInfo.friends){
          this.userClass.myInfo.friends = [];
        }

        a.friends.push(this.userClass.myInfo.id);
        this.userClass.myInfo.friends.push(a.id);

        this.crud.callUpdate(this.userClass.collection, a, a.id);
        this.clearRequest(id);
      }
    }
  }

  clearRequest(id: string){
    for(const a of this.userClass.myInfo.friendsRequests){
      let index = 0;
      if(id === a){
        this.userClass.myInfo.friendsRequests.splice(index, 1);
      }
      index++;
    }
    this.userNotification.deleteNotification(id, this.userClass.notificationTypes[0]);
    this.crud.callUpdate(this.userClass.collection, this.userClass.myInfo, this.userClass.myInfo.id);
  }

  deleteFriend(id: string){
    for(const a of this.userClass.myInfo.friends){
      let index = 0;
      if(a === id){
        const excludedFriend = this.userClass.findUser(id);
        for(const b of excludedFriend.friends){
          let indexExcludedFriend = 0;
          if(b === this.auth.id){
            excludedFriend.friends.splice(indexExcludedFriend, 1);
          }
          indexExcludedFriend++;
        }
        this.userClass.myInfo.friends.splice(index, 1);
        this.chatClass.deleteChat(this.chatClass.getChatWithFriend(id).id);
        this.userChat.deleteNewMessagesFromChat(this.chatClass.getChatWithFriend(id).id, id);
        this.crud.callUpdate(this.userClass.collection, excludedFriend, excludedFriend.id);
        this.crud.callUpdate(this.userClass.collection, this.userClass.myInfo, this.userClass.myInfo.id);
        this.screen.presentToast('Um minuto de silêncio para o soldado caído', 'F no Chat', 'info');
      }
      index++;
    }
  }

  getNewMessagesFromChat(id: string){
    if(this.userClass.myInfo.newMessages){
      for(const a of this.userClass.myInfo.newMessages){
        if(a.chatId === id){
          return a.quantity;
        }
      }
    }
  }
}
