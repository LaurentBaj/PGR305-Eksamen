import { FC, useContext } from 'react';
import { IMonster } from '../../interfaces/IMonster';
import MonsterItem from './MonsterItem';
import { MonsterContext } from '../../contexts/MonsterContext';
import { MonsterContextType } from '../../types/MonsterContextType';

const MonsterList: FC = () => {

    const {monsters} = useContext(MonsterContext) as MonsterContextType;

    const createMonsterList = () => {
        return monsters.map( ( monster: IMonster, key: number ) => {
            return (
                <MonsterItem 
                    key={key}
                    id={monster.id}
                    name={monster.name}
                    image={monster.image}
                />
            )
        } );
    }

    return (
        <section>
            <h3>Monsterliste</h3>
            <section>{ createMonsterList() }</section>
        </section>
    )
}

export default MonsterList;