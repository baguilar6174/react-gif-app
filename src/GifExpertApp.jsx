import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Halo']);
  const addCategory = (category) => {
    if(categories.includes(category)) return;
    setCategories([...categories, category]);
  }

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory addCategory={addCategory}/>
      { categories.map((c) => <GifGrid key={c} category={c} /> ) }
    </>
  )
}

export default GifExpertApp