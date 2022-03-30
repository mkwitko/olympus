import { Component, Input, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation/navigation.service';

@Component({
  selector: 'app-multiple-fabs',
  templateUrl: './multiple-fabs.component.html',
  styleUrls: ['./multiple-fabs.component.scss'],
})
export class MultipleFabsComponent implements OnInit {

  @Input() fab;
  @Input() items;

  constructor(
    private navigation: NavigationService
  ) { }

  ngOnInit() {}

  goTo(url: string){
    const myUrl = this.fab.masterRoute + '/' + url;
    this.navigation.callChangePage(myUrl);
  }

}
