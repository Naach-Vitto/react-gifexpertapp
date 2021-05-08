
import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGridd = ({category}) => {

    const { data:images, loading } =useFetchGifs( category );

    return (
        <>
            <h3 className = "animate__animated animate__bounce animate__fadeIn"> {category} </h3>

            {/* {loading ? <p>loading</p> : null} es lo mismo */}
            {loading && <p className = "animate__animated animate__bounce animate__flash">Loading</p>}


            <div className="card-grid">
                {
                    images.map ( img => (
                        <GifGridItem 
                            key = {img.id}
                            { ... img }                
                        />
 
                    ))
                }
            </div>
        </> 
    )
}
