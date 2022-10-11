import { Component, OnInit } from '@angular/core';
import { movieCreationDTO, movieDTO } from '../movies.model';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {

  constructor() { }
  model:movieDTO={title:'Spider-Man',inTheaters:true,summary:"spider bites,becomes spiderman",releaseDate:new Date(),trailer:'www.youtube.com',poster:'https://www.bellanaija.com/wp-content/uploads/2019/01/Spider-Man-Far-From-Home.jpg'}

  ngOnInit(): void {
  }

  saveChanges(movieCreationDTO:movieCreationDTO){

  }

}
