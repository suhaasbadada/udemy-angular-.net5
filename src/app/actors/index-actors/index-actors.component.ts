import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { actorDTO } from '../actors.model';
import { ActorsService } from '../actors.service';

@Component({
  selector: 'app-index-actors',
  templateUrl: './index-actors.component.html',
  styleUrls: ['./index-actors.component.css']
})
export class IndexActorsComponent implements OnInit {

  constructor(private actorsService:ActorsService) { }
  actors!:any;
  columnsToDisplay=['name','actions'];
  totalAmountOfRecords:any;
  currentPage=1;
  pageSize=5;
  loadPaginator=false;
  dataSource = new MatTableDataSource();
  
  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.actorsService.get(this.currentPage,this.pageSize).subscribe((response:HttpResponse<actorDTO[]>)=>{
      this.actors=response.body;
      this.totalAmountOfRecords=response.headers.get("totalAmountOfRecords");
      this.loadPaginator=true;
    });
  }

  updatePagination(event:PageEvent){
    this.currentPage=event.pageIndex+1;
    this.pageSize=event.pageSize;
    this.loadData();
  } 

  delete(id:number){
    this.actorsService.delete(id).subscribe(()=>{
      this.loadData();
    });
  }
}
