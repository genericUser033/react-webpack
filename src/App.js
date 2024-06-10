import './App.css'
import './Content'
import React, {useState} from 'react'
import Content from "./Content";

function App() {
    const [state, setState] = useState(false);

   return (
       <>
           <button onClick={() => setState(!state)}>Show</button>

           <div>
               {state && <Content/>}
           </div>
       </>

   )
}

export default App;