import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-profile-home',
  templateUrl: './profile-home.page.html',
  styleUrls: ['./profile-home.page.scss'],
})
export class ProfileHomePage implements OnInit {

  @ViewChild('trophySlides', { read: IonSlides }) slides: IonSlides;


  public trophyItens = [
    {
      name: 'SHARDS',
      active: true,
      id: 0,
      itens: [
        {
          img: '../../../../../assets/img/gold-card.png',
          value: 0
        },
        {
          img: '../../../../../assets/img/gold-card.png',
          value: 0
        },
        {
          img: '../../../../../assets/img/gold-card.png',
          value: 0
        },
        {
          img: '../../../../../assets/img/gold-card.png',
          value: 0
        },
      ]
    },
    {
      name: 'EARNINGS',
      active: false,
      id: 1,
      itens: [
        {
          img: '../../../../../assets/img/gold-card.png',
          value: 0
        },
        {
          img: '../../../../../assets/img/gold-card.png',
          value: 0
        },
        {
          img: '../../../../../assets/img/gold-card.png',
          value: 0
        },
        {
          img: '../../../../../assets/img/gold-card.png',
          value: 0
        },
      ]
    },
    {
      name: 'MATCHES',
      active: false,
      id: 2,
      itens: [
        {
          img: '../../../../../assets/img/gold-card.png',
          value: 0
        },
        {
          img: '../../../../../assets/img/gold-card.png',
          value: 0
        },
        {
          img: '../../../../../assets/img/gold-card.png',
          value: 0
        },
        {
          img: '../../../../../assets/img/gold-card.png',
          value: 0
        },
      ]
    },
    {
      name: 'MEDALS',
      active: false,
      id: 3,
      itens: [
        {
          img: '../../../../../assets/img/gold-card.png',
          value: 0
        },
        {
          img: '../../../../../assets/img/gold-card.png',
          value: 0
        },
        {
          img: '../../../../../assets/img/gold-card.png',
          value: 0
        },
        {
          img: '../../../../../assets/img/gold-card.png',
          value: 0
        },
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
    for(const a of this.trophyItens){
      a.active = false;
      if(a.id === myId){
        a.active = true;
      }
    }
  }

  changeSlide(id: number){
    this.slides.slideTo(id);
  }
}
