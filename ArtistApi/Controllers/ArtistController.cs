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
        private readonly ArtistService artistService; 

        public ArtistController(ArtistService _artistService)
        {
            artistService = _artistService; 
        }    

        [HttpGet]
        public IEnumerable<Artist> GetArtists()
        {
            return artistService.GetArtists();  
        }

        [HttpGet("{id}")]
        public ActionResult<Artist> GetArtist(string id)
        {
            Artist artist = artistService.GetArtist(id);

            if(artist != null)
            {  
                return artist;
            }
            else
            {
                return NotFound();
            }
        }

        [HttpPost]
        public Artist PostArtist(Artist newArtist)
        {
            artistService.PostArtist(newArtist); 
            return newArtist; 
        }
    }

}