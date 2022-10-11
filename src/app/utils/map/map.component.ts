import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as L from 'leaflet';
import { latLng, LeafletMouseEvent, marker, Marker, tileLayer } from 'leaflet';
import { coordinatesMap } from './coordinate';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  @Input() initialCoordinates: coordinatesMap[]=[];
  @Output() onSelectedLocation=new EventEmitter<coordinatesMap>();

  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: 'Angular Movies' })
    ],
    zoom: 11,
    center: latLng(
      17.388950781312616, -641.5328979492189)
  };

  layers: Marker<any>[]=[];
    defaultIcon = L.icon({
      iconUrl: 'marker-icon.png',
  });

  ngOnInit(): void {
    this.layers=this.initialCoordinates.map(value=>marker([value.latitude,value.longitude], {icon: this.defaultIcon}));
  }

  
  handleMapClick(event:LeafletMouseEvent){
    const latitude=event.latlng.lat;
    const longitude=event.latlng.lng;
    console.log({latitude,longitude});
    const m=marker([latitude,longitude], {icon: this.defaultIcon});
    this.layers=[]
    this.layers.push(m);
    this.onSelectedLocation.emit({latitude,longitude});
  }
}