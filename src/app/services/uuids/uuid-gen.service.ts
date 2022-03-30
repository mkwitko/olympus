import { Injectable } from '@angular/core';
import { UUID } from 'angular2-uuid';

@Injectable({
  providedIn: 'root'
})
export class UuidGenService {

  constructor(
  ) { }

  genID(){
    const id = UUID.UUID();
    return id;
  }
}
