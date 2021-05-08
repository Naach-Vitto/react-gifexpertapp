import React, { useState } from 'react';
import { AddCategory } from './Components/AddCategory';
import { GifGridd } from './Components/GifGridd';

export const GifExpertApp = () => {

    // const categories = ['Pokemon', 'Samurai X', 'Dragon Ball']
    const [categories, setCategories] = useState(['Dragon Ball']);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories = { setCategories } />
            <hr />
            
            <ol>
                {
                    categories.map( category => (
                        <GifGridd
                            key = {category}
                            category = {category} 
                        />
                    ))
                }
            </ol>

        </>
    )
}