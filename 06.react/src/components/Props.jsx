import React, { useState } from 'react'

function Child({ name, age, func }) {
    return (
        <>
            <h3>Child Component</h3>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <button onClick={func}>Child:Increment</button>
        </>
    )
}

const Props = () => {
    const [count, setCount] = useState(0);
    function increment() {
        setCount(count + 1);
    }
    return (
        <>
            <h2>Props Example</h2>
            <h3>Parent Component</h3>
            <p>Count: {count}</p>
            <Child name={'John'} age={20} func={increment} />

        </>
    )
}

export default Props