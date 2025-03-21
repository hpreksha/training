export default function States() {
    let count = 0;
    const incrementCount = () => {
        count++;
        console.log("count: ",count);
    };
    return (
        <>  
            <p>Tring to manipulating normal variable</p>
            <button onClick={incrementCount}>Increment Count</button>
            <p>Count:{count}</p>
        </>
    )
}