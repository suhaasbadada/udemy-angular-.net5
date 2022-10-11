import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { actorCreationDTO,actorDTO } from '../actors.model';

@Component({
  selector: 'app-edit-actor',
  templateUrl: './edit-actor.component.html',
  styleUrls: ['./edit-actor.component.css']
})
export class EditActorComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute) { }

  model:actorDTO={
    name: 'Tom Holland', dateOfBirth: new Date(),
    biography:"default value",
    picture:'https://m.media-amazon.com/images/M/MV5BYzBiZTRlMzAtZWIwZC00YjM3LTk5YTAtMTRkNmFhYjRjMTdiXkEyXkFqcGdeQXJoYW5uYWg@._V1_UX477_CR0,0,477,268_AL_.jpg',
  };
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      // alert(params['id']);
    })
  }

  saveChanges(actorCreationDTO:actorCreationDTO){
    console.log(actorCreationDTO);
  }

}
