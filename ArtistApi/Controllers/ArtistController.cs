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

        [HttpGet("{id}")]
        public ActionResult<Artist> GetOne(string id)
        {
            Artist artist = _artistService.GetOne(id);

            if (artist == null)
            {
                return NotFound();
            }

            return artist;
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteArtist(string id)
        {
            Artist artist = _artistService.GetOne(id);

            if (artist == null)
            {
                return NotFound();
            }

            _artistService.DeleteArtist(id);
            return NoContent();
        }

        [HttpPut("{id}")]
        public IActionResult UpdateArtist(string id, Artist artistIn)
        {
            Artist artist = _artistService.GetOne(id);

            if (artist == null)
            {
                return NotFound();
            }

            _artistService.UpdateArtist(id, artistIn);
            return NoContent();
        }


    }

}