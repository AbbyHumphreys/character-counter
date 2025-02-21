import React from 'react'
import logoDarkTheme from "../assets/images/logo-dark-theme.svg"
import lightModeButton from "../assets/images/icon-sun.svg"
import "./Header.sass"


export default function Header () {
    return (
        <div className="header-container">
            <img src={logoDarkTheme} alt="Character Counter Logo" />
            <img src={lightModeButton} alt="Dark or Light Mode Button" />
        </div>
    )
}