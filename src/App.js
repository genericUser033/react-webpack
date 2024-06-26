import './App.css'
import './Content'
import React, {useCallback, useState} from 'react'
import ReactMemo from "./ReactMemo";
import Sample from "./Sample";
import UseMemo from "./UseMemo";
import UseReducer from "./useReducer";
import UseReducer2 from "./UseReducer2";

function emitComment(id) {
    setInterval(() => {
        window.dispatchEvent(
            new CustomEvent(`lesson-${id}`,{
                detail: `Noi dung comment cua lesson ${id}`
            })
        )
    }, 2000)
}

// emitComment(1)
// emitComment(2)
// emitComment(3)

function App() {
    const [state, setState] = useState(false);
    const [count, setCount] = useState(0);

    // dependencies thay doi => tra ve tham chieu moi
    // dependencies khong thay doi => tra ve tham chieu cu
    const handleIncrease = useCallback(() => {//useCallback tra ve tham chieu truoc do
        setCount(count => count + 1);
    }, [])

   return (
       <>
           <div style={{padding: '10px 32px'}}>
               <UseReducer2 />
           </div>
       </>

   )
};

export default App;