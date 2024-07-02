import React from "react";
import {useContext} from "react";
import {ThemeContext} from "../ThemeContext";


const Paragraph = () => {
    const context = useContext(ThemeContext);

    return (
        <div style={{padding: '0 20px'}} className={context.theme}>
            <p>Context provides a way to pass data through the component tree without having to pass props down manually
                at
                every level</p>
        </div>
    )
}

export default Paragraph;