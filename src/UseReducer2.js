import React, {useReducer, useRef} from 'react'
import {ADD_JOB, DELETE_JOB, SET_JOB} from "./constants/constants";
import {addJob, deleteJob, setJob} from "./actions/todo-actions";

// 1.Init state
const initialState = {
    job: '',
    jobs: []
}

// 3. Reducer
const reducer = (state, action) => { // it seems like action is the setJob, addJob
    let newState;
    switch (action.type) {
        case SET_JOB:
            newState = {
                ...state,
                job: action.payload
            };
            break
        case ADD_JOB:
            newState = {
                ...state,
                jobs: [...state.jobs, action.payload]
            };
            break
        case DELETE_JOB: //use array function
            const newJobs = state.jobs;
            newJobs.splice(action.payload, 1);//delete an element and return that element, the newJobs array will lose the deleted element
            newState = {
                ...state,
                jobs: newJobs
            };
            break
        default:
            throw new Error('Action not found!')
    }
    return newState;
}
// 4. Dispatch


function logger(reducer) {

    return (prevState, action) => {
        console.group(action.type)
        console.log('Prev state ', prevState)
        console.log('Action ', action)

        const newState = reducer(prevState, action);

        console.log('New State ', newState)
        console.groupEnd();
        return newState;
    }
}

function UseReducer2() {
    const [state, dispatch] = useReducer(logger(reducer), initialState);
    const {job, jobs} = state;
    const inputRef = useRef();

    return (
        <div>
            <h1>To do</h1>
            <input
                placeholder={'Enter to do ...'}
                value = {job}
                onChange={e => dispatch(setJob(e.target.value))} //syntax:dispatch(action(payload)) here
                ref={inputRef}
            />
            <button
                onClick={e=> {
                    dispatch(addJob(job));
                    dispatch(setJob('')) //c1
                    inputRef.current.focus()
                }}
            >Add</button>
            <div>
                {jobs.map((job, index) => {
                    return <li key={index}>{job}
                    <span onClick={() => {
                        dispatch(deleteJob(index))
                    }}>   &times;</span>
                    </li>
                })}
            </div>
        </div>
    )
}

export default UseReducer2;