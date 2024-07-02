import React, {createContext, useState} from "react";

//To transfer data directly between components, no middle object
// component A => B => C => when cutting B(middle object => we need to fix code to transfer data from A=> C)

export const ThemeContext = createContext();

function ThemeProvider({children}) {
    const [theme, setTheme] = useState('light');

    const handleClick = () => {
        setTheme(theme ==='light' ? 'dark' : 'light');
    }

    const context = {
        theme,
        handleClick
    }
    return (
        <ThemeContext.Provider value={context}>
            {children}
        </ThemeContext.Provider>
    )
}

export {ThemeProvider}