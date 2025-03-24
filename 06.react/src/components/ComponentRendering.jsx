import React from 'react'
import { useState } from 'react';

function Child() {
  const [count, setCount] = useState(0);
  console.log("Child component rerendered");
  return (
    <>
    <h3>Child component</h3>
      <button onClick={() => setCount(count + 1)}>Child:Increment</button>
      <p>Count is: {count}</p>
      {/* {message} */}
    </>
  );
}


// Parent Component
const ComponentRendering = () => {
  const [count, setCount] = useState(0);
  console.log("Parent component rerendered");
  return (
    <>
      <h2>ComponentRendering</h2>
      <h3>Parent component</h3>
      <div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <p>Count is: {count}</p>

        <br />
        <Child />
      </div>
    </>

  )
}

export default ComponentRendering