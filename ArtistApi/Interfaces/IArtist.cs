namespace ArtistApi.Interfaces 
{
    public interface IArtist 
    {
        string Id { get; set; }
        string Name { get; set; }
        string Description { get; set; }
        string Image { get; set; }
    }
}