import React, { useState } from 'react'

function Child({ name, age }) {
    return (
        <>
            <p>Name: {name}</p>
            <p>Age: {age}</p> <br />
        </>
    )
}

const Props = () => {
    return (
        <>
            <h2>Props Example</h2>
            <Child name={'John'} age={20} />
            <Child name={'John1'} age={22} />

        </>
    )
}

export default Props