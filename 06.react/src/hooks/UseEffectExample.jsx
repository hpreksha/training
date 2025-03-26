import React, { useState, useEffect } from "react";

const UseEffectExample = () => {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setTimer((prevTimer) => prevTimer + 1), 1000);

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    (async function fetchData() {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();
      console.log("Fetched Data:", data);
    })();
  }, []);

  useEffect(() => {
    console.log("Render on every change");
  });

  useEffect(() => {
    console.log("Render on state count");
    return () => {
      console.log("Clean up");
    };
  }, [count]);

  return (
    <>
      <h2>useEffect Example</h2>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <button onClick={() => setVisible(!visible)}>
        {visible ? "true" : "false"}
      </button>
      <div>{timer}</div>
    </>
  );
};

export default UseEffectExample;

/*
useEffect “delays” a piece of code from running until that render is reflected on the screen.
useEffect runs after every render except the first render.
useEffect runs after the first render if the dependency array is empty.
useEffect runs after the first render and every render when there is no dependency array.
useEffect runs after the first render and when the dependency array changes.
useEffect runs before the component is removed from the screen
*/
