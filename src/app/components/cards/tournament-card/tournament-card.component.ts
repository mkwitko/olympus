import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tournament-card',
  templateUrl: './tournament-card.component.html',
  styleUrls: ['./tournament-card.component.scss'],
})
export class TournamentCardComponent implements OnInit {

  @Input() tournament;

  constructor() { }

  ngOnInit() {}

}
