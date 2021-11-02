import { FC, useState, useEffect, createContext} from "react";
import { IMonster } from "../interfaces/IMonster";
import { MonsterContextType } from "../types/MonsterContextType";
import { MonsterService } from "../services/MonsterService";

export const MonsterContext = createContext<MonsterContextType | null>(null);

export const MonsterProvider: FC = ({children}) => {

    const [monsters, setMonsters] = useState<IMonster[]>([
        { id: "test", name: "Testmonster", image: "cute-witch.png" }
    ]);

    useEffect( () => {
        getMonsters()
    }, [])

    const getMonsters = async () => {
        const _monsters = await MonsterService.getAll(); 
        setMonsters(_monsters)
    }

    return (
        <>
            <MonsterContext.Provider value={{monsters}}>
                {children}
            </MonsterContext.Provider>
        </>
    )
}

