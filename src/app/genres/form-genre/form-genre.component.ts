import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { firstLetterUppercase } from 'src/app/validators/firstLetterUpperacase';
import { genreCreationDTO } from '../genres.model';

@Component({
  selector: 'app-form-genre',
  templateUrl: './form-genre.component.html',
  styleUrls: ['./form-genre.component.css']
})
export class FormGenreComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }

  form!:FormGroup;
  @Input() model!:genreCreationDTO;
  @Output() onSaveChanges: EventEmitter<genreCreationDTO>=new EventEmitter<genreCreationDTO>();
  loading = false;
  success = false;

  ngOnInit(): void {
    this.form=this.formBuilder.group({
      name:['',{
        validators:[Validators.required,Validators.minLength(3),firstLetterUppercase()]
      }]
    });
    
    if(this.form.value!==undefined){
      this.form.patchValue(this.model);
    }

  }

  async saveChanges(){
    // ...save genre
    this.loading=true;
    const fv=this.form.value;
    try{
      this.success=true;
      this.onSaveChanges.emit(this.form.value);
    }catch(err){
      console.error(err);
    }
    this.loading=false;
  }

  getErrorMessageFieldName(){
    const field=this.form.get('name');
    if(field?.hasError('required')){
      return 'The name field is required';
    }

    if(field?.hasError('minlength')){
      return 'The minimum length is 3';
    } 
    
    if(field?.hasError('firstLetterUppercase')){
      return field?.getError('firstLetterUppercase').message;
    }
    return '';
  }
}
