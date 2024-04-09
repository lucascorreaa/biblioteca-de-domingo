import React from 'react'
import { ThemeToggle } from '../ThemeToggle'
import './styles.css'

export function Header() {

    return (
        <div className='header-container'>
            <div className="header-content">
            <h1>Biblioteca <span>de Domingo</span></h1>
            <div className='header-actions'>
                <button className='btn'>login</button>
                <button className='btn'>registro</button>
            </div>
        </div>
        <ThemeToggle />
        </div>
    )
}