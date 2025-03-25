import { useState } from "react";

export default function States() {
  const [person, setPerson] = useState({
    firstName: 'Preksha',
    lastName: 'Hirani',
  });
  let count = 0;
  const incrementCount = () => {
    count++;
    console.log("count: ", count);
  };
  function handleFirstNameChange(event) {
    setPerson({
      ...person,
      firstName: event.target.value
    });
  }
  return (
    <>
      <p>Tring to manipulating normal variable</p>
      <button onClick={incrementCount}>Increment Count</button>
      <p>Count:{count}</p>
      <br />
      <input value={person.firstName} onChange={handleFirstNameChange} />
      <p>firstName: {person.firstName}</p>
      <p>lastName: {person.lastName}</p>

    </>
  )
}