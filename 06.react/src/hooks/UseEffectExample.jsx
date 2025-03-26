import React, { useState, useEffect } from "react";

const UseEffectExample = () => {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setTimer((prevTimer) => prevTimer + 1), 1000); // Fixed timer increment

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []); // Run only once on mount

  useEffect(() => {
    (async function fetchData() {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();
      console.log("Fetched Data:", data);
    })(); // IIFE for immediate execution
  }, []); // Run only once on mount

  useEffect(() => {
    console.log("Render only once");
  }, [timer]); // Correct usage for running only once

  useEffect(() => {
    console.log("Render on every change");
  }); // Correct usage for running on every render

  useEffect(() => {
    console.log("Render on state count");
    return () => {
      console.log("Clean up");
    };
  }, [count]); // Runs when `count` changes

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

, : render on every change
, [] : render only once

*/
