using MongoDB.Driver;
using MonsterApi.Models;
using System.Collections.Generic;
using System.Linq;

namespace MonsterApi.Services
{
    public class MonsterService
    {
        private readonly IMongoCollection<Monster> _monsters;

        public MonsterService(IMonsterDatabaseSettings settings)
        {
            var client = new MongoClient( settings.ConnectionString );
            var database = client.GetDatabase( settings.DatabaseName );
            _monsters = database.GetCollection<Monster>( settings.MonsterCollectionName );
        }

        public List<Monster> GetMonsters()
        {
            return _monsters.Find( monster => true ).ToList();
        }

        public Monster PostMonster(Monster newMonster)
        {
            // Fin anledning til å bruke try catch
            _monsters.InsertOne( newMonster );
            return newMonster;
        }



    }

}