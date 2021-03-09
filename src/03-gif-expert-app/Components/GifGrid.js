import React, { useEffect, useState } from 'react'
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGifs } from '../helpers/getGifs';
// const api_key = 'oCMI8hJjs2ZlBimVxVCIlwLrc5Laq2Sw';

export const GifGrid = ({ category }) => {

    // const [arrimages, setArrImages] = useState([]);
    // // similar a *componendidmount*
    // useEffect(() => {
    //     getGifs(category).then(setArrImages)
    // }, [category])//si la variable mandada (category) cambia - ejecturar el hook

    // custom hook
    const { data: images, loading } = useFetchGifs(category);


    return (
        <>
            <h3> {category} </h3>
            {loading && <p>Cargando ...</p>}
            <div className="card-grid">
                {

                    images.map((img) => <GifGridItem key={img.id} {...img} />)
                }
            </div>
        </>
    )
}
