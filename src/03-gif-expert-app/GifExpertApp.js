import React, { useState } from 'react';
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';


const GifExpertApp = () => {
    const [categorias, setCategorias] = useState(['goku']);
    // const handleCategorias =()=> setCategorias(value => [...value,'otro item']);

    return <>
        <h1>Gif Expert</h1>
        <hr />
        <AddCategory setCategoriesProps={setCategorias} />
        <ol>
            {
                categorias.map((item) => {
                    return <GifGrid key={item} category={item}></GifGrid>
                })
            }
        </ol>
    </>
}

export default GifExpertApp;
