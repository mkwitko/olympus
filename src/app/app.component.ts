import { Chat } from 'src/app/classes/chat/chat';
import { CrudService } from 'src/app/services/firebase/crud/crud.service';
import { UserFriendsService } from './services/user-functions/user-friends/user-friends.service';
import { NavigationService } from './services/navigation/navigation.service';
import { Component } from '@angular/core';
import { AuthService } from './services/firebase/auth/auth.service';
import { MenuService } from './services/menu/menu.service';
import { User } from './classes/user/user';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public userItens = [
    {
      name: 'Perfil',
      path: 'profile-home',
      icon: 'person-sharp'
    },
    {
      name: 'Social',
      path: 'friends-home',
      icon: 'people-sharp',
      badge: true
    },
    {
      name: 'Torneios',
      path: 'tournaments-home',
      icon: 'trophy-sharp'
    },
    {
      name: 'Equipes',
      path: 'teams-home',
      icon: 'medal-sharp'
    }
  ];

  public adminItens = [
    {
      name: 'Inicio',
      path: 'home',
      icon: 'home-sharp'
    },
    {
      name: 'Criar Torneios',
      path: 'create-tournaments',
      icon: 'trophy-sharp'
    },
    {
      name: 'Criar Achievements',
      path: 'create-achievements',
      icon: 'ribbon-sharp'
    },
    {
      name: 'Administrar Usuários',
      path: 'manage-users',
      icon: 'person-sharp'
    },
    {
      name: 'Configurações do App',
      path: 'admin-configs',
      icon: 'settings-sharp'
    },
    {
      name: 'Pedidos de Suporte',
      path: 'admin-support',
      icon: 'help-circle-sharp',
      badge: true
    }
  ];


  constructor(
    public menuCtrl: MenuService,
    public userClass: User,
    private chatClass: Chat,
    private userFriends: UserFriendsService,
    private auth: AuthService,
    private navigation: NavigationService,
    private crud: CrudService
  ) {
    this.auth.getAuth().onAuthStateChanged(user => {
      this.menuCtrl.menuBool = !user;
      if(user)
      {
        this.auth.id = user.uid;

        this.crud.callGetAll(this.userClass.collection).subscribe(allUsers => {
          this.userClass.allUsers = allUsers;
        });
        this.crud.callGetAll(this.chatClass.collection).subscribe(allChats => {
          this.chatClass.allChats = allChats;
          this.chatClass.getMyChats();
        });
          this.crud.callGet(this.userClass.collection, this.userClass.myInfo, this.auth.id).subscribe(myInfo => {
            this.userClass.myInfo = myInfo;
            this.userFriends.setFriendRequests();
            this.userFriends.setFriends();
        });
      }
    });
  }

  changePage(url: string){
    this.navigation.callChangePage(url);
    this.menuCtrl.close();
  }

  logout(){
    this.auth.callLogout();
  }

}
