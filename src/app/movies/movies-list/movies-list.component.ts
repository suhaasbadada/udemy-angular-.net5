import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void{
  }
  
  @Input()
  movies:any;
  
  smovie={
    title:'Spider-Man',
    releaseDate: new Date(),
    lead: 'Toby Maguire, James Franco, Kirsten Dunst, Willem Dafoe',
    director: 'sam raimi',
    tprice: 300.51
  };

  remove(ind:number){
    this.movies.splice(ind,1);
  }
} 
