import React, { useState } from 'react'
import { useEffect } from 'react';
const UseEffectExample = () => {
  let temp = 2;
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);


  useEffect(()=> {
    console.log("Render only once");
  }, []);

  useEffect(()=> {
    console.log("Render on every change");
  });

  useEffect(() => {
    console.log("Render on state count");
  },[count]);


  function updateSimple() {
    temp = temp+1;
  }
  return (
    <>
      <h2>useEffect Example</h2>
      <button onClick={() => setCount(count+1)}>{count}</button>
      <button onClick={() => setVisible(!visible)}>{visible? 'true': 'false'}</button>
      <button onClick={updateSimple}>{temp}</button>

    </>
    
  )
}

export default UseEffectExample


/*
useEffect “delays” a piece of code from running until that render is reflected on the screen.

, : render on every change
, [] : render only once

*/