using System.Collections.Generic;

namespace ArtistApi.Interfaces
{
    public interface IAlbum
    {
        string Id { get; set; }
        string Name { get; set; }
        List<string> Songs { get; set; }
        string Artist_id { get; set; }
    }
}