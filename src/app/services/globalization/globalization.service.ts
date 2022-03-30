import { TranslateService } from '@ngx-translate/core';
import { Injectable } from '@angular/core';
import { CacheService } from '../cache/cache.service';


@Injectable({
  providedIn: 'root'
})
export class GlobalizationService {

  private myLang = 'My_Language';
  private path = './../../assets/flags/';

  // eslint-disable-next-line @typescript-eslint/member-ordering
  public language: string;

  constructor(
    private translate: TranslateService,
    private cache: CacheService
  ) { }

  async setInitialLanguage(obj?: string){
    if(obj){
      this.language = obj;
    } else {
      this.language = this.translate.getBrowserLang();
      await this.getLangInCache().then((res => {
        if(res){
          this.language = res;
        }
      }));
    }
    this.translate.setDefaultLang(this.language);
    this.cacheSystem(this.language);
  }

  changeLanguage(obj: string){
    this.language = obj;
    this.translate.use(this.language);
    this.setLangToCache(this.language);
  }

  setLangs(){
    return [
      { lang: 'English', value: 'en', img: this.path + 'en.png', selected: 'no', index: 0},
      { lang: 'Português', value: 'pt', img: this.path + 'pt.png', selected: 'no', index: 1},
      { lang: 'Français', value: 'fr', img: this.path + 'fr.png', selected: 'no', index: 2},
      { lang: 'Español', value: 'es', img: this.path + 'es.png', selected: 'no', index: 3},
      { lang: 'Italiano', value: 'it', img: this.path + 'it.png', selected: 'no', index: 4}
    ];
  }

  translateMessage(key: string){
    let message: string;
    this.translate.get(key).subscribe(res => {
      message = res;
    });
    return message;
  }

  private cacheSystem(obj?){
    this.getLangInCache().then((res => {
      if(!res){
        this.setLangToCache(obj);
      }
    }));
  }

  private setLangToCache(obj): Promise<any> {
    return this.cache.setCache(this.myLang, obj);
  }

  private getLangInCache(): Promise<any> {
    return this.cache.getCache(this.myLang);
  }

}
