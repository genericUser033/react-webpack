import React, {memo} from "react";

function Sample({onIncrease}) {
    console.log('Re-render')
    return (
        <div>
            <h1>Hello anh em!</h1>
            <button onClick={onIncrease}>Click me!</button>
        </div>
    )
}

export default memo(Sample);