import { Component } from '@angular/core';
import { UserInterface } from 'src/app/interfaces/auth/user';
import { AuthService } from 'src/app/services/firebase/auth/auth.service';
import { NavigationService } from 'src/app/services/navigation/navigation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage{

  public userLogin: UserInterface = {};
  public passwordVisible = true;
  public recoveryEmail: string;

  constructor(
    private authService: AuthService,
    private navagationService: NavigationService
  ){}

  login(){
    this.authService.callLogin(this.userLogin);
  }

  forgotPassword(url: string) {
    this.navagationService.callChangePage(url);
  }

  register(url: string){
    this.navagationService.callChangePage(url);
  }

  changePasswordVisible() {
    this.passwordVisible = !this.passwordVisible;
  }
}
