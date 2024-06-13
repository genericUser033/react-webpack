import React, {useEffect, useRef, useState} from "react";

function UseRef() {
    const [count, setCount] = useState(60);
    const timerId = useRef();//won't be reset if the component is re-rendered
    const prevCount = useRef();
    const h1Ref = useRef();

    useEffect(() => {
        console.log(h1Ref.current.getBoundingClientRect())
    }, [])

    useEffect(() => {
        prevCount.current = count;
    }, [count])

    const handleStart = () =>{
        timerId.current = setInterval(() => {
            setCount(prev => prev - 1);
        }, 1000)
        console.log('Start ->', timerId);
    }

    const handleStop = () =>{
        clearInterval(timerId.current);//need to get Id so that we can clear => have to use useRef
        console.log('Stop ->', timerId.current);
    }

    console.log(count, prevCount.current);

    return (
        <div style={{padding: 20}}>
            <h1 ref={h1Ref}>{count}</h1>
            <button onClick = {handleStart}>Start</button>
            <button onClick = {handleStop}>Stop</button>
        </div>
    )
}

export default UseRef;