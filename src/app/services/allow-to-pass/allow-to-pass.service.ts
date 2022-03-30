import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AllowToPassService {

  constructor() { }

  guardian(objects: any[], condition?: any)
  {
    for(const a of objects){
      if(condition)
      {
        if(a !== condition){
          return false;
        }
      }
      else
      {
        if(!a){
          return false;
        }
      }
  }
  return true;
  }
}
