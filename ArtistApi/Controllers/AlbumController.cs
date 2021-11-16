using Microsoft.AspNetCore.Mvc;
using ArtistApi.Models;
using System.Collections.Generic;
using ArtistApi.Services;

namespace ArtistApi.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class AlbumController : ControllerBase
    {
        private readonly AlbumService _albumService;

        public AlbumController(AlbumService albumService)
        {
            _albumService = albumService;
        }

        [HttpGet]
        public IEnumerable<Album> GetAlbums()
        {
            return _albumService.GetAlbums();
        }

        [HttpPost]
        public Album PostAlbum(Album newAlbum)
        {
            return _albumService.PostAlbum(newAlbum);
        }

        [HttpGet("{id}")]
        public ActionResult<Album> GetOne(string id)
        {
            Album album = _albumService.GetOne(id);

            if (album == null)
            {
                return NotFound();
            }

            return album;
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteAlbum(string id)
        {
            Album album = _albumService.GetOne(id);

            if (album == null)
            {
                return NotFound();
            }

            _albumService.DeleteAlbum(id);
            return NoContent();
        }

        [HttpPut("{id}")]
        public IActionResult UpdateAlbum(string id, Album albumIn)
        {
            Album album = _albumService.GetOne(id);

            if (album == null)
            {
                return NotFound();
            }

            _albumService.UpdateAlbum(id, albumIn);
            return NoContent();
        }


    }

}