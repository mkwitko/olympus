import { UnsubService } from './../../services/unsub/unsub.service';
import { Injectable } from '@angular/core';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { UserInterface } from 'src/app/interfaces/auth/user';
import { AuthService } from 'src/app/services/firebase/auth/auth.service';
import { CrudService } from 'src/app/services/firebase/crud/crud.service';
import { ScreenService } from 'src/app/services/screen-effects/screen.service';

@Injectable()
export class User {

  public collection: AngularFirestoreCollection;
  public ref = 'Users';

  public orgRoles = [
    {
      name: 'Sem org'
    },
    {
      name: 'Jogador'
    },
    {
      name: 'Coach'
    },
    {
      name: 'Analista'
    },
    {
      name: 'Manager'
    },
    {
      name: 'CEO'
    }
  ];

  public notificationTypes = [
    'Friend-Request'
  ];

  public allUsers = new Array<UserInterface>();
  public myInfo: UserInterface;
  public friendsRequests = new Array<UserInterface>();
  public friends = new Array<UserInterface>();
  public newMessages: number;

  constructor(
    private auth: AuthService,
    private crud: CrudService,
    private screen: ScreenService,
    private unsub: UnsubService
  )
  {
    this.collection = this.crud.callCollectionConstructor('Users');
  }

  getMyInfo(): Promise<any>{
    return new Promise((resolve) => {
      const a = this.crud.callGet(this.collection, this.myInfo, this.auth.id).subscribe(res => {
        this.myInfo = res;
        resolve(this.myInfo);
      }
      );
      this.unsub.unsub([a]);
    });
  }

  findUser(search: string){
    for(const a of this.allUsers){
      if(search === a.userName || search === a.userEmail || search === a.id){
        return a;
      }
    }
  }

  getUsernameFromIds(ids: string[]){
    let names = new Array<string>();
    names = [];
    for(const a of this.allUsers){
      for(const b of ids){
        if(b === a.id){
          names.push(a.userName);
        }
      }
    }
    return names;
  }


}
