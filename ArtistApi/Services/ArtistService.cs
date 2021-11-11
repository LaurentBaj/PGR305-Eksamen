using MongoDB.Driver;
using ArtistApi.Models;
using System.Collections.Generic;
using System.Linq;

namespace ArtistApi.Services
{
    public class ArtistService
    {
        private readonly IMongoCollection<Artist> _artist;

        public ArtistService(IArtistDatabaseSettings settings)
        {
            var client = new MongoClient( settings.ConnectionString );
            var database = client.GetDatabase( settings.DatabaseName );
            _artist = database.GetCollection<Artist>( settings.ArtistCollectionName );
        }

        public List<Artist> GetArtists()
        {
            return _artist.Find( Artist => true).ToList(); 
        }

        public Artist PostArtist(Artist newArtist)
        {
            // Fin anledning til å bruke try catch
            _artist.InsertOne(newArtist);
            return newArtist;  
        }

    }

}