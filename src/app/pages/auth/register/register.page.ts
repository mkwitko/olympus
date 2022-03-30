import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { User } from 'src/app/classes/user/user';
import { UserInterface } from 'src/app/interfaces/auth/user';
import { AuthService } from 'src/app/services/firebase/auth/auth.service';
import { CrudService } from 'src/app/services/firebase/crud/crud.service';
import { NavigationService } from 'src/app/services/navigation/navigation.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public userRegister: UserInterface = {};
  public passwordVisible = true;



  constructor(
    private authService: AuthService,
    private crud: CrudService,
    private navagationService: NavigationService,
    private userClass: User
  )
  {

  }

  ngOnInit() {
  }

  register(){
    this.userRegister.createdAt = new Date().getTime();
    this.userRegister.role = 'user';
    this.userRegister.orgRole = [];
    this.userRegister.orgRole.push(this.userClass.orgRoles[0].name);
    this.authService.callRegister(this.userRegister).subscribe(cred => {
      this.crud.addClient(this.userRegister, cred.user.uid, this.userClass.collection);
    });
  }

  back(url: string){
    this.navagationService.callChangePage(url);
  }

  changePasswordVisible() {
    this.passwordVisible = !this.passwordVisible;
  }

}
