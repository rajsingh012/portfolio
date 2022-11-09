import React from 'react';
import useCustomTheme from "react-switch-theme";
import colors from './themeColor';

const themeOptions = {
    colors,
    activeMode: 'dark',
    offlineStorageKey: 'themeKey' // name that will be stored in local storage
};

const ThemeMode = () => {
    const [theme, setDiffTheme] = useCustomTheme(themeOptions);
    return (
        <h4 className="thememode__icon" onClick={setDiffTheme}>
            <span className="themeicon"></span>
        </h4>
    )

}

export default ThemeMode;