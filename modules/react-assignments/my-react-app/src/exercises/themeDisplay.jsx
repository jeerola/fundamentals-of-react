import React, { useContext } from "react";
import { ThemeContext } from "./themeContext";

const ThemeDisplay = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const styles = {
        backgroundColor: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
        minHeight: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '50px'
    };

    return (
        <div style={styles}>
            <p>Current theme is: <strong>{theme}</strong></p>
            <button onClick={toggleTheme}>
                Switch to {theme === 'light' ? 'dark' : 'light'} mode
            </button>
        </div>
    );
};

export default ThemeDisplay;