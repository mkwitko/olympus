import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UnsubService {

  constructor() { }

  unsub(sub: any[]){
    setTimeout(() => {
      for(const a of sub){
        a.unsubscribe();
      }
      console.log('unsubscribed!');
      }, 2500);
  }
}
