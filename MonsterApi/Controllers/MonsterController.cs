using Microsoft.AspNetCore.Mvc;
using MonsterApi.Models; 
using System.Collections.Generic; 
using MonsterApi.Services;  

namespace MonsterApi.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class MonsterController : ControllerBase
    {
        private readonly MonsterService _monsterService; 

        public MonsterController(MonsterService monsterService)
        {
            _monsterService = monsterService; 
        }    

        [HttpGet]
        public IEnumerable<Monster> GetMonsters()
        {
            return _monsterService.GetMonsters();  
        } 

        [HttpPost]
        public Monster PostMonster(Monster newMonster)
        {
            _monsterService.PostMonster(newMonster); 
            return newMonster; 
        }
    }

}