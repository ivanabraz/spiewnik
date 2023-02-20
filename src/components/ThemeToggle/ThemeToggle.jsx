import React from "react";
import { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';

// CONTEXT
import { ThemeContext } from "../../context/ThemeContext";

const ThemeToggle = (ThemeToggleProps) => {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
            <div className={`${ThemeToggleProps.toggleCustomClass} text-3xl text-dmbgray-300 dark:text-white`}>
            {theme === 'dark' 
                ? (
                    <FontAwesomeIcon icon={faSun} onClick={() => setTheme( theme ==='dark' ? 'light' : 'dark')} />
                    )
                : (
                    <FontAwesomeIcon icon={faMoon} onClick={() => setTheme( theme ==='dark' ? 'light' : 'dark')}/>
                )
            }
        </div>  
    )

};

export default ThemeToggle;