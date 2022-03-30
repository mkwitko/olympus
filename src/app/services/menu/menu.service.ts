import { Injectable } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  public menuBool = true;

  constructor(
    private menu: MenuController
  ) { }

  close(){
    this.menu.close();
  }

  menuCtrl(bool: boolean){
    this.menu.enable(bool);
  }
}
