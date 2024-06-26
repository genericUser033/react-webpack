// useReducer & useState are used to update states
// but Reducer is used for complex data, nested objects, ...

import React, {useReducer} from "react";

//useReducer: needs more steps: create reducer, dispatch(call, activate...)

const initialState = 0;

//action
const UP_ACTION = "up";
const DOWN_ACTION = "down";

//reducer
const reducer = (state, action) => {
    switch (action) {
        case UP_ACTION:
            return state + 1;
        case DOWN_ACTION:
            return state - 1;
        default:
            throw new Error('Invalid action');
    }
}

function UseReducer() {
    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <div style={{padding: 20}}>
            <h1>{count}</h1>
            <button
                onClick={() => dispatch(DOWN_ACTION)}
            >
                Down
            </button>
            <button
                onClick={() => dispatch(UP_ACTION)}
            >
                Up
            </button>
        </div>
    )
}

export default UseReducer;
//steps to work with useReducer

// 1.Init state
// 2. Actions
// 3. Reducer
// 4. Dispatch
