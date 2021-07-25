import React from 'react'
import './menu.scss'
const Menu = ({menuOpen , setMenu}) => {
    return (
        <div className={"menu " +(menuOpen && 'active') }>
            
            <ul>
                <li onClick={() => setMenu(false)}>
                    <a href="#intro">Intro</a>
                </li>
                <li onClick={() => setMenu(false)}>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li onClick={() => setMenu(false)}>
                    <a href="#testimonial">Testimonial</a>
                </li>
                <li onClick={() => setMenu(false)}>
                    <a href="#work">Work</a>
                </li>
                <li onClick={() => setMenu(false)}>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
            
        </div>
    )
}

export default Menu