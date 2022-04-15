import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-die-roller',
  templateUrl: './die-roller.component.html',
  styleUrls: ['./die-roller.component.scss']
})
export class DieRollerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  number: number;
  reroll: boolean;

  rollNumber() {
    let firstRoll = Math.floor(Math.random()*6)+1;
    let secondRoll = Math.floor(Math.random()*6)+1;
    let thirdRoll = Math.floor(Math.random()*6)+1;
    let reroll = this.reroll;

    if(reroll == true) {
      while(firstRoll == 1) {
        firstRoll = Math.floor(Math.random()*6)+1;
      }
      while(secondRoll == 1) {
        secondRoll = Math.floor(Math.random()*6)+1;
      } 
      while(thirdRoll == 1) {
        thirdRoll = Math.floor(Math.random()*6)+1;
      }
    }

    this.number = firstRoll+secondRoll+thirdRoll;

  }

}
