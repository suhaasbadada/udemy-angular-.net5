import { Component, Input, OnInit } from '@angular/core';
import { multipleSelectorModel } from './multiple-selector.module';

@Component({
  selector: 'app-multiple-selector',
  templateUrl: './multiple-selector.component.html',
  styleUrls: ['./multiple-selector.component.css']
})
export class MultipleSelectorComponent implements OnInit {

  constructor() { }

  @Input() SelectedItems: multipleSelectorModel[]=[];
  @Input() NonSelectedItems: multipleSelectorModel[]=[];

  ngOnInit(): void {
    console.log(this.SelectedItems);
    console.log(this.NonSelectedItems);
  }

  select(item: multipleSelectorModel,i:number){
    this.SelectedItems.push(item);
    this.NonSelectedItems.splice(i,1);
  }
  deselect(item: multipleSelectorModel,i:number){
    this.NonSelectedItems.push(item);
    this.SelectedItems.splice(i,1);
  }

  selectAll(){
    this.SelectedItems.push(...this.NonSelectedItems);
    this.NonSelectedItems=[];
  }

  deSelectAll(){
    this.NonSelectedItems.push(...this.SelectedItems);
    this.SelectedItems=[];
  }
}
