import React, { useState } from 'react'

const DomExample = () => {
    const [time, setTime] = useState(Date());
    const timer = () => {
        setTime(Date());
    }
    setInterval(timer, 1000);
    return (
        <>
        <h2>Dom Example</h2>
        <p>{time}</p>
        </>
    )
}

export default DomExample