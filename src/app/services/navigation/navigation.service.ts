import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(
    private router: Router,
    private nav: NavController
  ) { }

  callChangePage(url){
    this.changePage(url);
  }

  callGoBack(){
    this.goBack();
  }

  callToChat(id: string){
    this.changePage('chats-details/' + id);
  }

  private changePage(url: string){
    this.router.navigateByUrl(url);
  }

  private goBack(){
    this.nav.back();
  }
}
