import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/firebase/auth/auth.service';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { MenuControlService } from 'src/app/services/screen-effects/menu-control.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage {

  public recoveryEmail: string;

  constructor(
    private navagationService: NavigationService,
    private auth: AuthService,
    private menuCtrl: MenuControlService,
  ) {
    this.menuCtrl.callMenuCtrl(false);
  }

  sendRessetPassword() {
    this.auth.callResetPassword(this.recoveryEmail)
    .then(() => {
      this.recoveryEmail = '';
    });
  }

  returnLogin() {
    this.navagationService.callGoBack();
  }

}
