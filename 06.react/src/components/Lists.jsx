import React from 'react'
import { useState } from 'react'
const tempList = [1, 2, 3, 4];
const Lists = () => {
  const [value, setValue] = useState('');
  const [list, setList] = useState(tempList);
  const [visible, setVisible] = useState(false);
  const handleChange = event => {
    setValue(event.target.value);
  };

  const handleSubmit = event => {
    if (value) {
      setList(prevList => [...prevList, parseInt(value)]);
    }
    setValue('');
    console.log(list);
    event.preventDefault();
  };
  const reverseList = () => {
    setVisible(!visible);
    setList(list.reverse());
  }

  return (
    <>
      <h2>Lists</h2>
      <ul>
        {list.map((i) => (
          <li key={i}>
            {/* <li> */}
            <label>
              <input type="checkbox" />{i}
            </label>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleChange} />
        <button type="submit">Add Item</button>
      </form>
      <h3>Why do we need keys</h3>
      <button onClick={reverseList}>Reverse List</button>
    </>

  )
}

export default Lists


// If we will not use key the checkbox will not be updated according to listitem when reversed.
// So, for React to uniquely identify list elements we need to use keys.
// When children have keys, React uses the key to match children in the original tree with children in the subsequent tree