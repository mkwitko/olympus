import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})

export class CacheService {


  constructor(
    private storage: Storage
  )
  {
    this.iniStorage();
  }

  async iniStorage(){
    await this.storage.create();
  }

  setCache(obj: string, value: string): Promise<any>{
    return this.storage.set(obj, value);
  }

  getCache(obj: string): Promise<any> {
    return this.storage.get(obj);
  }
}
