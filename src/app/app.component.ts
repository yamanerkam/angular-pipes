import { Component } from '@angular/core';
import { CustomPipePipe } from './custom-pipe.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(private customPipe:CustomPipePipe){
    console.log(customPipe.transform("qweerertytuyui",5,8))
  }

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


  people = [
    {
      name: 'John Doe',
      age: 30,
      occupation: 'Engineer'
    },
    {
      name: 'Jane Smith',
      age: 25,
      occupation: 'Designer'
    },
    {
      name: 'Sam Wilson',
      age: 35,
      occupation: 'Developer'
    }
  ];

}
