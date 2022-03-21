import { useState } from "react";

export function Count() {
    const [count, setCount] = useState(0)

    function incrementCount() {
        setCount(count + 1)
    }

    function decrementCount() {
        setCount(count - 1)
    }

    return (
        <>
            <h1>Counter</h1>
            <h2>{count}</h2>
            <button id="1" onClick={incrementCount}>+</button>
            <button id="2" onClick={decrementCount}>-</button>

        </>
    )
}