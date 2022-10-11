import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { actorCreationDTO,actorDTO } from '../actors.model';

@Component({
  selector: 'app-form-actor',
  templateUrl: './form-actor.component.html',
  styleUrls: ['./form-actor.component.css']
})
export class FormActorComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }
  form!:FormGroup;
  @Input() model!:actorDTO;
  @Output() onSaveChanges=new EventEmitter<actorCreationDTO>();

  ngOnInit(): void {
    this.form=this.formBuilder.group({
      name:['',{validators:[Validators.required]}],
      dateOfBirth:'',
      picture:'',
      biography:''
    });

    if(this.model!==undefined){
      this.form.patchValue(this.model);
    }
  }
  loading=false;
  success=false;
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

  onImageSelected(image:any){
    this.form.get('picture')!.setValue(image);
  }

  changeMarkdown(content:any){
    this.form.get('biography')?.setValue(content);
  }
}
