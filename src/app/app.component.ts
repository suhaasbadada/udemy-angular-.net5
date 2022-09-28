import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title='any value';
  display = true;
  moviesInTheatres:any;
  moviesFutureReleases:any;
  
  ngOnInit(): void{
    setTimeout(()=>{
    this.moviesInTheatres=[{
      title:'Spider-Man',
      releaseDate: new Date(),
      lead: 'Toby Maguire, James Franco, Kirsten Dunst, Willem Dafoe',
      director: 'sam raimi',
      tprice: 300.51
    }];
    

    this.moviesFutureReleases=[{
      title:'Spider-Man 2 ',
      releaseDate: new Date(),
      lead: 'Toby Maguire, James Franco, Kirsten Dunst, Willem Dafoe',
      director: 'sam raimi',
      tprice: 300.51
    },
    {
      title:'Spider-Man 3',
      releaseDate: new Date(),
      lead: 'Toby Maguire, James Franco, Kirsten Dunst, Willem Dafoe',
      director: 'sam raimi',
      tprice: 300.51
    }];
  },500)
  }

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