import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-movie-filter',
  templateUrl: './movie-filter.component.html',
  styleUrls: ['./movie-filter.component.css']
})
export class MovieFilterComponent implements OnInit {
  constructor(private formBuilder:FormBuilder) { }
  form!:FormGroup;
  genres = [{id: 1, name: 'Drama'}, {id: 2, name: 'Action'},{id: 3, name: 'Comedy'}];
  movies = [
    {title: 'Spider-Man', poster: 'https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg'},
    {title: 'Moana', poster: 'https://m.media-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@._V1_UX182_CR0,0,182,268_AL_.jpg'},
    {title: 'Inception', poster: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg'}
  ];
  
  originalMovies = this.movies;
  loading = false;
  success = false;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: '',
      genreId: 0,
      upcomingReleases: false,
      inTheatres: false
    });

    this.form.valueChanges
      .subscribe(values => {
        this.movies = this.originalMovies;
        this.filterMovies(values);
      });
  }
  async saveChanges(){
    // ...save genre
    this.loading=true;
    const fv=this.form.value;
    try{
      this.success=true;
    }catch(err){
      console.error(err);
    }
    this.loading=false;
  }

  filterMovies(values: any){
    if (values.title){
      this.movies = this.movies.filter(movie => movie.title.indexOf(values.title) !== -1);
    }
  }

  clearForm(){
    this.form.reset();
  }

}
