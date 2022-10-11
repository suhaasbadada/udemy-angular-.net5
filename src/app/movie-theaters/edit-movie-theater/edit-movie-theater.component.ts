import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { movieTheatersCreationDTO,movieTheatersDTO } from '../movie-theaters.model';

@Component({
  selector: 'app-edit-movie-theater',
  templateUrl: './edit-movie-theater.component.html',
  styleUrls: ['./edit-movie-theater.component.css']
})
export class EditMovieTheaterComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute) { }
  model: movieTheatersDTO = {name:'Hyderabad',latitude:17.388950781312616,longitude:-641.5328979492189,};
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      // alert(params['id']);
    });
  }

  saveChanges(movieTheater:movieTheatersCreationDTO){
    
  }
}
