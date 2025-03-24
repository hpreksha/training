import React from 'react'
import { useState } from 'react'
const tempList = [1,2,3,4];
  const Lists = () => {
    const [value, setValue] = useState('');
    const [list, setList] = useState(tempList);
  
    const handleChange = event => {
      setValue(event.target.value);
    };
  
    const handleSubmit = event => {
        if (value) {
            setList(prevList => [...prevList, parseInt(value)]); // Use spread to add a new item
          }
      setValue('');
      console.log(list);
      event.preventDefault();
    };
  return (
    <>
    <h2>Lists</h2>
    <ul>
        {list.map((i) => (
            <li key={i}>{i}</li>
        ))}
    </ul>
    <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleChange} />
        <button type="submit">Add Item</button>
      </form>
    </>
  )
}

export default Lists