using ArtistApi.Interfaces;
using System.Collections.Generic;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace ArtistApi.Models
{
    public class Album : IAlbum
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string Name { get; set; }
        public List<string> Songs { get; set; }
        public string Artist_Id { get; set; }
    }
}