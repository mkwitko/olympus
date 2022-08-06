import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-teams-home',
  templateUrl: './teams-home.page.html',
  styleUrls: ['./teams-home.page.scss'],
})
export class TeamsHomePage implements OnInit {

  @ViewChild('rosterSlides', { read: IonSlides }) slides: IonSlides;

  slideTrophy = {
    slidesPerView: 3.5,
    spaceBetween: 10,
    autoplay: true
  };

  slideRoster = {
    slidesPerView: 3.3,
    spaceBetween: 10,
    autoplay: true
  };

  rosters = [
    {
      name: 'Brasil',
      active: true,
      id: 0,
      players: [
        {
          pic: '../../../../../assets/img/default-user.png',
          nick: 'Kwitko',
          name: 'Maurício Kwitko',
          role: 'O mais brabo'
        },
        {
          pic: '../../../../../assets/img/default-user.png',
          nick: 'Kwitko',
          name: 'Maurício Kwitko',
          role: 'O mais brabo'
        },
        {
          pic: '../../../../../assets/img/default-user.png',
          nick: 'Kwitko',
          name: 'Maurício Kwitko',
          role: 'O mais brabo'
        },
        {
          pic: '../../../../../assets/img/default-user.png',
          nick: 'Kwitko',
          name: 'Maurício Kwitko',
          role: 'O mais brabo'
        },
        {
          pic: '../../../../../assets/img/default-user.png',
          nick: 'Kwitko',
          name: 'Maurício Kwitko',
          role: 'O mais brabo'
        },
        {
          pic: '../../../../../assets/img/default-user.png',
          nick: 'Kwitko',
          name: 'Maurício Kwitko',
          role: 'O mais brabo'
        }
      ]
    },
    {
      name: 'Latam',
      active: false,
      id: 1,
      players: [
        {
          pic: '../../../../../assets/img/default-user.png',
          nick: 'Kwitko',
          name: 'Maurício Kwitko',
          role: 'O mais brabo'
        },
        {
          pic: '../../../../../assets/img/default-user.png',
          nick: 'Kwitko',
          name: 'Maurício Kwitko',
          role: 'O mais brabo'
        },
        {
          pic: '../../../../../assets/img/default-user.png',
          nick: 'Kwitko',
          name: 'Maurício Kwitko',
          role: 'O mais brabo'
        }
      ]
    },
    {
      name: 'Europa',
      active: false,
      id: 2,
      players: [
        {
          pic: '../../../../../assets/img/default-user.png',
          nick: 'Kwitko',
          name: 'Maurício Kwitko',
          role: 'O mais brabo'
        },
        {
          pic: '../../../../../assets/img/default-user.png',
          nick: 'Kwitko',
          name: 'Maurício Kwitko',
          role: 'O mais brabo'
        },
        {
          pic: '../../../../../assets/img/default-user.png',
          nick: 'Kwitko',
          name: 'Maurício Kwitko',
          role: 'O mais brabo'
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  async set(){
    let myId;
    await this.slides.getActiveIndex().then(res => {
      myId = res;
    });
    for(const a of this.rosters){
      a.active = false;
      if(a.id === myId){
        a.active = true;
      }
    }
  }

  changeSlide(id: number){
    console.log(id);
    this.slides.slideTo(id);
  }

}
