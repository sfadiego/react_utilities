import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeoesByPublisher'
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }) => {
    
    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
    
    return (
        <div className="card-columns animate__animated animate__backInLeft">
            {
                heroes.map(item =>{
                    return <HeroCard  key={item.id} {...item} />
                })
            }
        </div>
    )
}
