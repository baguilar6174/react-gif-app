//rafce/rafc snipet to generet a new functional component

import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['Dragon Ball']);
    
    // const handleAdd = () => {
    //     // Méthod 1
    //     setCategories([...categories, 'Hunter']);
    //     // Méthod 2
    //     // setCategories(categories => [...categories, 'Hunter']);
    // }
    
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr />
            {/* <button onClick={handleAdd}>Agregar</button> */}
            <ol>
                {categories.map(c => {return <GifGrid key={c} category={c}/>})}
            </ol>
        </>
    )
}

export default GifExpertApp
