import { AuthService } from 'src/app/services/firebase/auth/auth.service';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { UserFriendsService } from './../../../../services/user-functions/user-friends/user-friends.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/classes/user/user';
import { AlertController } from '@ionic/angular';
import { Chat } from 'src/app/classes/chat/chat';

@Component({
  selector: 'app-friends-home',
  templateUrl: './friends-home.page.html',
  styleUrls: ['./friends-home.page.scss'],
})
export class FriendsHomePage implements OnInit {

  public segments = ['friends', 'requests'];
  public segment = this.segments[0];

  constructor(
    public userClass: User,
    private chatClass: Chat,
    private userFriend: UserFriendsService,
    private navigation: NavigationService,
    private alertController: AlertController,
    private auth: AuthService
  ) { }

  ngOnInit() {
  }

  segmentChanged(event){
    this.segment = event.detail.value;
  }

  accept(id: string){
    this.userFriend.acceptRequest(id);
    this.userFriend.clearRequest(id);
  }

  reject(id: string){
    this.userFriend.clearRequest(id);
  }

  callChat(id: string){
    const friend = this.userClass.findUser(id);
    const myself = this.userClass.findUser(this.auth.id);

    for(const a of this.chatClass.myChats){
      if(a.users.includes(id) && a.users.length === 2){
        this.navigation.callToChat(a.id);
      } else {
        this.chatClass.createChatWithFriend(friend, myself);
      }
    }

    if(this.chatClass.myChats.length === 0){
        this.chatClass.createChatWithFriend(friend, myself);
    }
  }

  callDelete(id: string){
    this.userFriend.deleteFriend(id);
  }

  public async presentAlertConfirm(id: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Excluir amigo',
      message: 'Tem certeza que deseja <strong>excluir</strong> este amigo?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button',
          handler: (blah) => {

          }
        }, {
          text: 'Confirmar',
          id: 'confirm-button',
          handler: (value) => {
            this.callDelete(id);
          }
        }
      ]
    });

    await alert.present();
  }

}
