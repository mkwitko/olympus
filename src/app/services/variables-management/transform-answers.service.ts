import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransformAnswersService {

  constructor() { }

  transform(object){
    const result = [];
    for(const a of object){
      result.push(a.answer);
    }
    return result;
  }
}
