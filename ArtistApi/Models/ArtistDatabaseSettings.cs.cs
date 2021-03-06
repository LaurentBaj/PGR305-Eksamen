namespace ArtistApi.Models
{
    public interface IArtistDatabaseSettings
    {
        string ArtistCollectionName { get; set; }
        string AlbumCollectionName { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }

    public class ArtistDatabaseSettings : IArtistDatabaseSettings 
    {
        public string ArtistCollectionName { get; set; }
        public string AlbumCollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }
}