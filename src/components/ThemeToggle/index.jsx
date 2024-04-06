import React, { useState } from 'react'
import { ToggleThemeContainer } from './styles'
import { ReactComponent as Sun } from '../../assets/images/svg/sun.svg'
import { ReactComponent as Moon } from '../../assets/images/svg/moon.svg'

export function ThemeToggle() {
    const [isLightTheme, setIsLightTheme] = useState(true);

    const toggleTheme = () => {
        setIsLightTheme(!isLightTheme);
      };

    return (
        <ToggleThemeContainer onClick={toggleTheme} >
            { isLightTheme ? <Sun /> : <Moon /> }
        </ToggleThemeContainer>
    )
}