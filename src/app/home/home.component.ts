import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  moviesInTheatres:any;
  moviesFutureReleases:any;
  
  ngOnInit(): void{
    setTimeout(()=>{
    this.moviesInTheatres=[{
      title:'Spider-Man',
      releaseDate: new Date(),
      price: 1400.99,
      poster:'https://www.bellanaija.com/wp-content/uploads/2019/01/Spider-Man-Far-From-Home.jpg'
    },
    {
      title:'Moana',
      releaseDate: new Date('2016-11-14'),
      tprice: 300.99,
      poster:'data:image/jpeg;base64,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'
    }];
    

    this.moviesFutureReleases=[
    // {
    //   title:'Spider-Man 2 ',
    //   releaseDate: new Date(),
    //   lead: 'Toby Maguire, James Franco, Kirsten Dunst, Willem Dafoe',
    //   director: 'sam raimi',
    //   tprice: 300.51
    // },
    // {
    //   title:'Spider-Man 3',
    //   releaseDate: new Date(),
    //   lead: 'Toby Maguire, James Franco, Kirsten Dunst, Willem Dafoe',
    //   director: 'sam raimi',
    //   tprice: 300.51
    // }
  ];
  },500)
  }

}