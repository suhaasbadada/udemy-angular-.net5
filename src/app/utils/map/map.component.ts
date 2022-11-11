import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as L from 'leaflet';
import { latLng, LeafletMouseEvent, marker, Marker, tileLayer } from 'leaflet';
import { coordinatesMap, coordinatesMapWithMessage } from './coordinate';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  @Input() initialCoordinates: coordinatesMapWithMessage[]=[];
  @Output() onSelectedLocation=new EventEmitter<coordinatesMap>();
  @Input() editMode:boolean=true;

  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: 'Angular Movies' })
    ],
    zoom: 11,
    center: latLng(
      17.388295515718546,78.45886230468739)
  };

  layers: Marker<any>[]=[];
  defaultIcon = L.icon({
      iconUrl: 'marker-icon.png',
  });

  ngOnInit(): void {
    this.layers=this.initialCoordinates.map((value)=>{
      const m=marker([value.latitude,value.longitude], {icon: this.defaultIcon});
      if(value.message){
        m.bindPopup(value.message,{autoClose:false,autoPan:false});
        return m;
      }
    });
  }

  
  handleMapClick(event:LeafletMouseEvent){
    if(this.editMode){
      const latitude=event.latlng.wrap().lat;
      const longitude=event.latlng.wrap().lng;
      console.log({latitude,longitude});
      const m=marker([latitude,longitude], {icon: this.defaultIcon});
      this.layers=[]
      this.layers.push(m);
      this.onSelectedLocation.emit({latitude,longitude});
    }
  }
}