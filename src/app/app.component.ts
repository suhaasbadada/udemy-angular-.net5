import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title='any value';
  display = true;

  doubleNumber(n: number){
    return n*2 
  }

  handleRating(rating:number){
    alert(`The user selected ${rating}`);
  }

  updateTitle(event:Event){
    this.title=(event.target as HTMLInputElement).value;
  }

  checkButton(){
    this.display=!this.display;
  }
}