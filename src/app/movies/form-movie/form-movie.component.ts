import { Component, Input, Output, OnInit, EventEmitter, KeyValueDiffers } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { TitleStrategy } from '@angular/router';
import { actorsMovieDTO } from 'src/app/actors/actors.model';
import { multipleSelectorModel } from 'src/app/utils/multiple-selector/multiple-selector.module';
import { movieCreationDTO, movieDTO } from '../movies.model';

@Component({
  selector: 'app-form-movie',
  templateUrl: './form-movie.component.html',
  styleUrls: ['./form-movie.component.css']
})
export class FormMovieComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }
  form!:FormGroup;
  @Input() model!:movieDTO;
  @Output() onSaveChanges=new EventEmitter<movieCreationDTO>();

  @Input() nonSelectedGenres: multipleSelectorModel[]=[];
  @Input() selectedGenres: multipleSelectorModel[]=[];

  @Input() nonSelectedMovieTheaters: multipleSelectorModel[]=[];
  @Input() selectedMovieTheaters: multipleSelectorModel[]=[];

  @Input() selectedActors:actorsMovieDTO[]=[];

  inTh=false;

  ngOnInit(): void {
    this.form=this.formBuilder.group({
      title:['',{validators:Validators.required}],
      summary:'',
      inTheatres: false,
      trailer:'',
      releaseDate:'',
      poster:'',
      genresIds:'',
      movieTheatersIds:'',
      actors:''
    })

    if(this.model!==undefined){
      this.form.patchValue(this.model);
    }
  }

  saveChanges(){
    const genresIds=this.selectedGenres.map(value=>value.key);
    this.form.get('genresIds')!.setValue(genresIds);

    const movieTheatersIds=this.selectedMovieTheaters.map(value=>value.key);
    this.form.get('movieTheatersIds')!.setValue(movieTheatersIds);

    const actors=this.selectedActors.map(val=>{
      return {id:val.id,character:val.character}
    });
    this.form.get('actors')!.setValue(actors);
    this.form.get('inTheatres').setValue(this.inTh);
    console.log(this.form.value);
    this.onSaveChanges.emit(this.form.value);
  }

  onImageSelected(file:File){
    this.form.get('poster')?.setValue(file);
  }

  changeMarkdown(content:string){
    this.form.get('summary')?.setValue(content);
  }
  
  showOptions(event:MatCheckboxChange): void {
   this.inTh=event.checked;
}
}
