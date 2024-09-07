import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes-ang';
  money:number = 50;
  name:string = "kam";
  today:Date= new Date();
  titleOfTheBook : string = "the lord of the rings"


  loveYouPlus1(){
    for (let index = 0; index < index+1; index++) {
      console.log("love you + 1")
    }
  }
}
