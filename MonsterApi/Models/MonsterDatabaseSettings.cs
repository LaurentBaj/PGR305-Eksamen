namespace MonsterApi.Models
{
    public interface IMonsterDatabaseSettings
    {
        string MonsterCollectionName { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }

    public class MonsterDatabaseSettings : IMonsterDatabaseSettings 
    {
        public string MonsterCollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }
}