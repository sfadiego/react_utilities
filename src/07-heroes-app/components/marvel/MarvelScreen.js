import React from 'react'
import { HeroList } from '../heores/HeroList'

export const MarvelScreen = () => {
    return (
        <div>
              <h1>Marvel screen</h1>
              <HeroList publisher={'Marvel Comics'}></HeroList>
        </div>
    )
}
