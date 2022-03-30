import { User } from 'src/app/classes/user/user';
import { ModalNotificationPage } from './../../../modal/modal-notification/modal-notification.page';

import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { Component, Input, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { ScreenService } from 'src/app/services/screen-effects/screen.service';

@Component({
  selector: 'app-my-header',
  templateUrl: './my-header.component.html',
  styleUrls: ['./my-header.component.scss'],
})
export class MyHeaderComponent implements OnInit {

  @Input() title: string;
  @Input() url: string;
  @Input() menu = true;
  @Input() sideButtons = true;

  constructor(
    public user: User,
    private navigation: NavigationService,
    private screen: ScreenService
  ) { }

  ngOnInit() {}

  goTo(url: string){
    this.navigation.callChangePage(url);
  }

  async presentModal() {
    this.screen.presentModal(ModalNotificationPage, 'transparent-modal');
  }

}
