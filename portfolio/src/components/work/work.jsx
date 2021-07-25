import React from 'react'
import { useState } from 'react'
import './work.scss'
const Work = () => {

    const [currentSlider , setSlider] = useState(0)

    const data = [

        {
            id:0,
            name: 'Rage',
            description: 'Riot Games brand new FPS has exploded onto the scene, meaning that most people are either already playing the game',
            img: 'assets/rage.png'
        },
        {
            id:1,
            name: 'Drake',
            description: 'Riot Games brand new FPS has exploded onto the scene, meaning that most people are either already playing the game',
            img: 'assets/rage.png'
        },
        {
            id:2,
            name: 'Devil',
            description: 'Riot Games brand new FPS has exploded onto the scene, meaning that most people are either already playing the game',
            img: 'assets/rage.png'
        }
    ]


const handleClick = (way) => 
{
    way === 'left' ? setSlider(currentSlider > 0 ? currentSlider - 1 : 2) : setSlider(currentSlider < data.length - 1 ? currentSlider + 1 : 0)
}


    return (
        <div className="work" id="work">
            <div className="slider" style={{transform: `translateX(-${currentSlider * 100}vw)`}}>
            {data.map((item) => (
                <div key={item.id} className="container">
                
                    <div className="item">
                        <div className="left">
                            <div className="leftcontainer">
                                <h3>{item.name}</h3>
                                <p>{item.description}</p>
                            </div>
                            
                        </div>
                        <div className="right">
                            <img src={item.img} alt=""></img>
                        </div>
                    </div>

                    
                    
                </div>
                
            
))
            }
    
    
            </div>
            
            <img src="assets/arrow.png" className="arrow left" onClick={() => handleClick("left")} alt="" />
            <img src="assets/arrow.png" className="arrow right" alt="" onClick={() => handleClick()}/>
        </div>
    )
}

export default Work
