import React,{useEffect , useRef} from 'react'
import './intro.scss'
import {init} from 'ityped'
const Intro = () => {

    const textRef = useRef()
useEffect(() => {
    init(textRef.current, { showCursor: true, backDelay: 1500 , typeSpeed:  100,strings: ['Game of Legends', 'Pack Up Yourself' ] })
} , [])

    return (
        <div className="intro" id="intro">
      
      <div className="left">
          <div className="imgContainer">
             <img src="assets/3037905.jpg" alt="nothing" />
          </div>

      </div>

      <div className="right">
            <div className="wrapper">
                <h2>Welcome to Valorant</h2>
                <h1>GO ON!!   <span ref={textRef}></span></h1>

            </div>

            <a href="#portfolio" ><img src="assets/down.png" height="30px" width="30px" alt="nothing"></img></a>
      </div>
        </div>
    )
}

export default Intro
