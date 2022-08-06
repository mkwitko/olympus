import { Component, OnInit } from '@angular/core';
import { CustomHttpService } from 'src/app/services/custom-http/custom-http.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  slideBanner = {
    loop: true,
    autoplay: true
  };

  slideCategorys = {
    slidesPerView: 1.5,
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
    // autoplay: true
  };

  constructor(
    private customHttp: CustomHttpService
  )
  {
    this.customHttp.request(environment.siteUrl).then(res => {
      console.log(res);
    });

    this.customHttp.request('https://rubrique.com.br/wp-json/wp/v2/users/').then(res => {
      console.log(res);
    });
  }

  ngOnInit() {

  }

}
