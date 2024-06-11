import './App.css'
import './Content'
import React, {useState} from 'react'
import UseEffectTimer from "./UseEffectTimer";

function App() {
    const [state, setState] = useState(false);

   return (
       <>
           <button onClick={() => setState(!state)}>Show</button>

           <div>
               {state && <UseEffectTimer/>}
           </div>
       </>

   )
};

export default App;