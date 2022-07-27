import { useState } from "react";

const AddCategory = ({addCategory}) => {

  const [inputValue, setInputValue] = useState("");
  const onChangeInput = (e) => setInputValue(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if(inputValue.trim().length <=1 ) return;
    addCategory(inputValue.trim());
    setInputValue("");
  }

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="" id="" placeholder="Buscar gifs..." value={inputValue} onChange={onChangeInput} />
    </form>
  )
}

export default AddCategory