import React from 'react'
import {Person , Mail} from '@material-ui/icons';
import './topbar.scss'
const Topbar = ({menuOpen , setMenu}) => {
    return (
        <div className={"topbar " + (menuOpen && 'active') } >
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Valorant</a>
                    <div className="itemContainer">
                        <Person  className="icon" />
                        <span>+91-8905333565</span>
                    </div>
                    <div className="itemContainer">
                        <Mail  className="icon" />
                        <span>valorant0033@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                   <div className="hamburger" onClick={()=> setMenu(!menuOpen)}>
                       <span className="line1"></span>
                       <span className="line2"></span>
                       <span className="line3"></span>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar
