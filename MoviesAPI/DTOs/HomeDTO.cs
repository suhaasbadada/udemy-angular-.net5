using System.Collections.Generic;

namespace MoviesAPI.DTOs
{
    public class HomeDTO
    {
        public List<MovieDTO> InTheatres { get; set; }
        public List<MovieDTO> UpcomingReleases { get; set; }
    }
}
