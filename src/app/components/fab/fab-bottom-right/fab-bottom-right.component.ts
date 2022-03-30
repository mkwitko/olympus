import { Component, Input } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation/navigation.service';

@Component({
  selector: 'app-fab-bottom-right',
  templateUrl: './fab-bottom-right.component.html',
  styleUrls: ['./fab-bottom-right.component.scss'],
})
export class FabBottomRightComponent{

  constructor(
    private navigation: NavigationService
  ){}

  // eslint-disable-next-line @typescript-eslint/member-ordering
  @Input() url: string;

  changePage(){
    this.navigation.callChangePage(this.url);
  }
}
