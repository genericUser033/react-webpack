import './App.css'
import './Content'
import React, {useState} from 'react'
import UseLayoutEffect from "./UseLayoutEffect";
import UseRef from "./UseRef";

function emitComment(id) {
    setInterval(() => {
        window.dispatchEvent(
            new CustomEvent(`lesson-${id}`,{
                detail: `Noi dung comment cua lesson ${id}`
            })
        )
    }, 2000)
}

emitComment(1)
emitComment(2)
emitComment(3)

function App() {
    const [state, setState] = useState(false);

   return (
       <>
           <button onClick={() => setState(!state)}>Show</button>

           <div>
               {state && <UseRef/>}
           </div>
       </>

   )
};

export default App;