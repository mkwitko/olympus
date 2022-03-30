import { Injectable } from '@angular/core';
import { User } from 'src/app/classes/user/user';
import { Notifications } from 'src/app/interfaces/notifications/notifications';
import { CrudService } from '../../firebase/crud/crud.service';

@Injectable({
  providedIn: 'root'
})
export class UserNotificationService {

  constructor(
    private user: User,
    private crud: CrudService
  ) { }

  sendNotification(to: string, message: string, from: string, type: string){
    let safeLock = false;
    if(!safeLock){
      const sendTo = this.user.findUser(to);
      const notification: Notifications = {message, from, createdAt: new Date().getTime(), type, id: from};
      if(!sendTo.notifications){
        sendTo.notifications = [];
      }
      sendTo.notifications.push(notification);
      this.crud.callUpdate(this.user.collection, sendTo, sendTo.id);
    }
    safeLock = true;
  }

  deleteNotification(id: string, type: string){
    for(const a of this.user.myInfo.notifications){
      if(type === this.user.notificationTypes[0]){
        let notificationIndex = 0;
        if(id === a.id){
          this.user.myInfo.notifications.splice(notificationIndex, 1);
        }
        notificationIndex++;
      }
    }
  }
}
