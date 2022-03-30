import { UserFriendsService } from './../../services/user-functions/user-friends/user-friends.service';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/classes/user/user';

@Component({
  selector: 'app-modal-notification',
  templateUrl: './modal-notification.page.html',
  styleUrls: ['./modal-notification.page.scss'],
})
export class ModalNotificationPage implements OnInit {

  constructor(
    public user: User,
    private modalController: ModalController,
    private userFriend: UserFriendsService
  ) { }

  ngOnInit() {

  }

  dismiss(){
    this.modalController.dismiss();
  }

  goTo(url: string){
    this.dismiss();
  }

  accept(id: string){
    this.userFriend.acceptRequest(id);
    this.userFriend.clearRequest(id);
    this.dismiss();
  }

  reject(id: string){
    this.userFriend.clearRequest(id);
    this.dismiss();
  }
}
