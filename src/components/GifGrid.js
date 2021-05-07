import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {

    /**
     * Use the customHook
     */
    const { data: images, loading } = useFetchGifs(category);

    return (
        <>
            <h3 className="animate__animated animate__fadeIn"> {category} </h3>
            { loading && <p className="animate__animated animate__flash">Loading</p> }
            <div className='card-grid'>
                {images.map((img) => {
                    // Se esta enviando cada una de las propiedades
                    // de las imágenes como una propiedad independiente
                    // con el operador spread
                    return <GifGridItem key={img.id} {...img} />
                }
                )};
            </div>
        </>
    )
}

export default GifGrid
