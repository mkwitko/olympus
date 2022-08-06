import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomHttpService {

  constructor(
    private http: HttpClient
  ) { }

  request(url: string): Promise<any>{
    return new Promise((resolve => {
      this.http.get(url).subscribe(res => {
        resolve(res);
      });
    }));
  }
}
