import React, {memo, useState} from "react";
// 1. memo() => Higher Order Component (HOC)
// 2. useCallback

//Hooks
//HOC
//Render props

function ReactMemo() {
    const [count, setCount] = useState(0);

    const handleIncrease = () => {
        setCount(count + 1);
    }

    return (
        <div style={{padding: '10px 32px'}}>
            <h1>{count}</h1>
            <button onClick={handleIncrease}>Click me!</button>
        </div>
    )
}

export default ReactMemo;