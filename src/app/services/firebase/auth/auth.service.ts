import { Injectable } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
import { UserInterface } from 'src/app/interfaces/auth/user';
import { ScreenService } from '../../screen-effects/screen.service';

import { indexedDBLocalPersistence,
  initializeAuth,
  Auth,
  getAuth,
  signInAnonymously,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  deleteUser  } from 'firebase/auth';
import { AllowToPassService } from '../../allow-to-pass/allow-to-pass.service';
import { MenuControlService } from '../../screen-effects/menu-control.service';
import { GlobalizationService } from '../../globalization/globalization.service';
import { NavigationService } from '../../navigation/navigation.service';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public id: string;
  private readonly auth: Auth;

  constructor(
    private screenService: ScreenService,
    private allow: AllowToPassService,
    private menuCtrl: MenuControlService,
    private globalization: GlobalizationService,
    private navigation: NavigationService
  )
  {
    const firebaseApp = initializeApp(environment.firebase);
    if (Capacitor.isNativePlatform()) {
      initializeAuth(firebaseApp, {
        persistence: indexedDBLocalPersistence
      });
    }
    this.auth = getAuth(firebaseApp);
  }

  async getId(){
    return await this.auth.currentUser.uid;
  }

  delete(){
    return from(this.auth.currentUser.delete());
  }

  callLogin(user: UserInterface){
    this.login(user);
  }

  callLoginAnon(){
    this.loginAnon();
  }

  callLogout(){
    this.logout();
  }

  callGetUser(){
    this.getUser();
  }

  getAuth(){
    return this.auth;
  }

  callRegister(user: UserInterface){
    return this.register(user);
  }

  async callResetPassword(email: string): Promise<any>{
    this.resetPassword(email);
  }

  private async login(user: UserInterface){
    if(this.allow.guardian([
      user.userEmail, user.userPassword]))
    {
      signInWithEmailAndPassword(this.auth, user.userEmail.trim(), user.userPassword.trim())
      .then(() =>{
        this.menuCtrl.callMenuCtrl(true);
      })
      .catch((error) => {
        this.screenService.presentErrorToast(error);
      });;
    } else {
      //screen
    }
  }

  private async loginAnon(){
    signInAnonymously(this.auth)
    .then(() =>{
      this.menuCtrl.callMenuCtrl(true);
    })
    .catch((error) => {
      this.screenService.presentErrorToast(error);
    });;
  }

  private async logout(){
    this.menuCtrl.callMenuCtrl(false);
    this.auth.signOut()
    .catch((error) => {
      this.screenService.presentErrorToast(error);
    });
  }

  private register(user: UserInterface){
    if(this.allow.guardian(
      [user.userEmail, user.userPassword]
    ))
    {
      return from(createUserWithEmailAndPassword(
        this.auth, user.userEmail.trim(), user.userPassword.trim()));
    } else {
      this.screenService.presentToast('Preencha os campos.', '', '');
    }
  }

  private async resetPassword(email: string){
    if(this.allow.guardian(
      [email]
    ))
    {
      sendPasswordResetEmail(this.auth, email.trim())
      .then((result) => {
        //screen
        this.navigation.callGoBack();
      })
      .catch((error) => {
        console.log(error.code);
      //screen
    });
    } else {
      //screen
    }
  }

  private async getUser(){
    return await this.auth.currentUser;
  }


}
