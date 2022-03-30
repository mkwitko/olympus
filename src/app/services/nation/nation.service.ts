import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NationService {

  constructor(
    private http: HttpClient
  ) { }

  getNation(code: string){
    return 'https://countryflagsapi.com/png/' + code;
  }
}
