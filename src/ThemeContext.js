import React, {createContext, useState} from "react";



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