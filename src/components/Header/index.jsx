import React from 'react'
import { ThemeToggle } from '../ThemeToggle'
import './styles.css'

export function Header() {

    return (
        <div className='header-container'>
            <div className="header-content">
            <h1>biblioteca <span>de domingo</span></h1>
            <div className='header-actions'>
                <button>login</button>
                <button>registro</button>
            </div>
        </div>
        <ThemeToggle />
        </div>
    )
}