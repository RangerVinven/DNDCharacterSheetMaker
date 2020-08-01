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
      if(firstRoll == 1) {
        while(firstRoll == 1) {
          firstRoll = Math.floor(Math.random()*6)+1;
        } 
      }
      if(secondRoll == 1) {
        while(secondRoll == 1) {
          secondRoll = Math.floor(Math.random()*6)+1;
        } 
      }
      if(thirdRoll == 1) {
        while(thirdRoll == 1) {
          thirdRoll = Math.floor(Math.random()*6)+1;
        } 
      }
    }

    console.log(reroll);
    console.log(firstRoll);
    console.log(secondRoll);
    console.log(thirdRoll);

    this.number = firstRoll+secondRoll+thirdRoll;

  }

}
