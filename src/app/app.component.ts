import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit  {
  title = 'D&D Character Maker';

  ngAfterViewInit(){
    window.document.bgColor = "#181A1B"
  }

}
