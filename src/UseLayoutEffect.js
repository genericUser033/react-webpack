import React, {useEffect, useLayoutEffect, useState} from "react";

// update state
// call clean up if dependencies change
// useLayoutEffect call callback function
// update dom(mutate)
// re-render UI
function UseLayoutEffect() {

    const [count, setCount] = useState(0)

    const handleCount = () => {
        setCount(count + 1);
    }

    useLayoutEffect(() => {
        if(count > 3) {
            setCount(0);
        }
    }, [count])

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleCount}>Toggle</button>
        </div>
    )
}

export default UseLayoutEffect;