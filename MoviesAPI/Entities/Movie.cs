﻿using MoviesAPI.Entities.Intermediate;
using MoviesAPI.Entities.InterRelated;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace MoviesAPI.Entities
{
    public class Movie
    {
        public int Id { get; set; }
        [StringLength(maximumLength: 75)]
        [Required]
        public string Title { get; set; }
        public string Summary { get; set; }
        public string Trailer { get;set; }
        public bool InTheatres { get; set; }
        public DateTime ReleaseDate { get; set; }
        public string Poster { get; set; }
        public List<MoviesGenres> MoviesGenres { get; set; }
        public List<MovieTheatersMovies> MovieTheatersMovies { get; set; }

        public List<MoviesActors> MoviesActors { get; set; }
    }
}
