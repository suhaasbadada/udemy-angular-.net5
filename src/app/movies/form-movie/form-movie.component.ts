import { Component, Input, Output, OnInit, EventEmitter, KeyValueDiffers } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TitleStrategy } from '@angular/router';
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

  nonSelectedGenres: multipleSelectorModel[]=[
    {key:1,value:'Drama'},
    {key:2,value:'Action'},
    {key:3,value:'Comedy'}
  ];

  selectedGenres: multipleSelectorModel[]=[];

  nonSelectedMovieTheaters: multipleSelectorModel[]=[
    {key:1,value:'Forum'},
    {key:2,value:'Inorbit'},
    {key:3,value:'Cinetown'}
  ];
  selectedMovieTheaters: multipleSelectorModel[]=[];

  ngOnInit(): void {
    this.form=this.formBuilder.group({
      title:['',{validators:Validators.required}],
      summary:'',
      inTheatres: false,
      trailer:'',
      releaseDate:'',
      poster:'',
      genresIds:'',
      movieTheatersIds:''
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
    this.onSaveChanges.emit(this.form.value);
  }

  onImageSelected(file:File){
    this.form.get('poster')?.setValue(file);
  }

  changeMarkdown(content:string){
    this.form.get('summary')?.setValue(content);
  }
}
