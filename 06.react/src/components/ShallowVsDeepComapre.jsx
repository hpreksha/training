import React, { useState, useEffect } from "react";

// Child component
const Child = ({ data }) => {
  console.log("Child rendered");
  return <div>Data: {data.value}</div>;
};

const ShallowVsDeepCompare = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState({ key: 1, value: "Initial" }); // Added a unique key
  const [prevData, setPrevData] = useState(data); // Track previous data

  useEffect(() => {
    // Compare current data with previous data
    if (data.key !== prevData.key) {
      setPrevData(data); // Update prevData only if data has changed
    }
  }, [data, prevData]);

  const updateData = () => {
    setData({ key: data.key + 1, value: "Updated" });
  };

  return (
    <div>
      <h1>Shallow vs Deep Compare Example</h1>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={updateData}>Update Data</button>
      <Child data={prevData} /> {/* Pass prevData to avoid unnecessary renders */}
    </div>
  );
};

export default ShallowVsDeepCompare;
