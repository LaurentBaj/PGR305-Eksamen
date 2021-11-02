import axios from "axios";
import { IMonster } from "../interfaces/IMonster";

export const MonsterService = (function(){
    
    const urlToMonsterController = "https://localhost:5001/monster";

    const getAll = async () => {
        const result = await axios.get( urlToMonsterController );
        return result.data as IMonster[];
    }

    const postNewMonster = async ( newMonster: IMonster ) => {
        const result = await axios.post( urlToMonsterController, newMonster );
        return result.data as IMonster;
    }

    return {
        getAll,
        postNewMonster
    }

}()) 