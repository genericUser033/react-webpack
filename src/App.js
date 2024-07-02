import './App.css'
import './Content'
import React, {useContext} from 'react'
import {Content} from "./Content/Content";
import {ThemeContext} from "./ThemeContext";

//     1. context

//     2. provider
//     3. consumer

function App() {
    const context = useContext(ThemeContext);
    return (
        <div>
            <button style={{margin: 20}} onClick={context.handleClick}>Toggle theme</button>
            <Content/>
        </div>
    )
};

export default App;