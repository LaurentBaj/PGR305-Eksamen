import { FC } from 'react';
import { IMonster } from '../../interfaces/IMonster';

const MonsterItem : FC<IMonster>  = ({ id, name, image }) => {
    return (
        <article>
            <h3>{name}</h3>
            <img src={`https://localhost:5001/images/${image}`} />
        </article>
    )
}

export default MonsterItem;