import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  constructor() { }
  @Input() maxRating=5;
  @Input() selectedRate=0;
  @Output() onRating = new EventEmitter<number>();
  previousRate=0;
  maxRatingArr:any=[];

  ngOnInit(): void {
    this.maxRatingArr=Array(this.maxRating).fill(0);
  }

  handleMouseEnter(i:number){
    this.selectedRate=i+1;
  }

  handleMouseLeave(){
    this.selectedRate=this.previousRate;
  }

  rate(i:number){
    this.selectedRate=i+1;
    this.previousRate=this.selectedRate;
    this.onRating.emit(this.selectedRate);
  }

}
