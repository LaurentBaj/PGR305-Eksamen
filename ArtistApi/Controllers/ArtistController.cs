using Microsoft.AspNetCore.Mvc;
using ArtistApi.Models; 
using System.Collections.Generic; 
using ArtistApi.Services;  

namespace ArtistApi.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class ArtistController : ControllerBase
    {
        private readonly ArtistService _artistService; 

        public ArtistController(ArtistService artistService)
        {
            _artistService = artistService; 
        }    

        [HttpGet]
        public IEnumerable<Artist> GetArtists()
        {
            return _artistService.GetArtists();  
        }

        [HttpPost]
        public Artist PostArtist(Artist newArtist)
        {
            return _artistService.PostArtist(newArtist);  
        }
    }

}