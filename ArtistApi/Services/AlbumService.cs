using MongoDB.Driver;
using ArtistApi.Models;
using System.Collections.Generic;
using System.Linq;

namespace ArtistApi.Services
{
    public class AlbumService
    {
        private readonly IMongoCollection<Album> _album;

        public AlbumService(IArtistDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);
            _album = database.GetCollection<Album>(settings.AlbumCollectionName);
        }

        public List<Album> GetAlbums()
        {
            return _album.Find(Album => true).ToList();
        }

        public Album PostAlbum(Album newAlbum)
        {
            // Fin anledning til å bruke try catch
            _album.InsertOne(newAlbum);
            return newAlbum;
        }

        public Album GetOne(string id)
        {
            return _album.Find(a => a.Id == id).Single();
        }

        public void DeleteAlbum(string id)
        {
            _album.FindOneAndDelete(a => a.Id == id);
        }

        public void UpdateAlbum(string id, Album albumIn)
        {
            _album.FindOneAndReplace(album => album.Id == albumIn.Id, albumIn);
        }

    }

}