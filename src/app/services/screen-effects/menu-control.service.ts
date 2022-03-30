import { Injectable } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class MenuControlService {

  constructor(
    private menuControl: MenuController
  ) { }

  callMenuCtrl(bool: boolean){
    this.menuCtrl(bool);
  }

  private menuCtrl(bool: boolean){
    this.menuControl.enable(bool);
  }
}
