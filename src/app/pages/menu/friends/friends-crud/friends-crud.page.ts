import { ScreenService } from 'src/app/services/screen-effects/screen.service';
import { UserFriendsService } from './../../../../services/user-functions/user-friends/user-friends.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/classes/user/user';
import { UserInterface } from 'src/app/interfaces/auth/user';
import { AuthService } from 'src/app/services/firebase/auth/auth.service';

@Component({
  selector: 'app-friends-crud',
  templateUrl: './friends-crud.page.html',
  styleUrls: ['./friends-crud.page.scss'],
})
export class FriendsCrudPage implements OnInit {

  public searchText = '';

  public found: UserInterface;

  constructor(
    private auth: AuthService,
    private userClass: User,
    private userFriend: UserFriendsService,
    private screen: ScreenService
  ) { }

  ngOnInit() {
  }

  search(event){
    this.searchText = event.detail.value;
    const searchedUser = this.userClass.findUser(this.searchText);
    if(this.searchText !== ''){
      if(this.userClass.allUsers){
        if(searchedUser !== undefined){
          if(this.userFriend.findFriend(this.auth.id, searchedUser.id)){
            this.screen.presentToast('Você já é amigo deste usuário', '', 'warning');
          } else if (this.userFriend.findRequest(this.auth.id, searchedUser.id)){
            this.screen.presentToast('Você já enviou solicitação para este usuário', '', 'warning');
          } else if (this.auth.id === searchedUser.id) {
            this.screen.presentToast('Você já é seu melhor amigo (:', '', 'warning');
          } else {
            this.found = searchedUser;
          }
        } else {
          this.screen.presentToast('Este usuário não foi encontrado!', '', 'warning');
        }
      }
    }
  }

  sendFriendRequest(){
    const from = this.userClass.findUser(this.auth.id);
    const message = from.userName + ' gostaria de ser seu amigo!';
    this.userFriend.sendFriendRequest(this.found, this.auth.id, message);
  }

}
