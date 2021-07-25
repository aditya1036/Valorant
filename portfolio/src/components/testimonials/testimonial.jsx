import React from 'react'
import './testimonial.scss'
const Testimonial = () => {

    const data = [


        {
            id: 1,
            name: "Aditya khandelwal",
            designation: 'CEO',
            description: "Co-Founder",
            img: 'assets/author.png',
            featured: false
        }
        ,
        {
            id: 2,
            name: "Aditya khandelwal",
            designation: 'CEO',
            description: "CO-Founder",
            img: 'assets/author.png',
            featured: true
        }
        ,
        {
            id: 3,
            name: "Aditya khandelwal",
            designation: 'CEO',
            description: "CO-Founder",
            img: 'assets/author.png',
            featured: false
        }

    ]





    return (
        <div className="testimonials" id="testimonial">
            <h1>Testimonials</h1>
            <div className="container">
                {data.map((item) => (

                    <div key={item.id} className={item.featured ? "card featured" : "card"}>
                        <div className="top">
                            <img src="assets/right-arrow.png" alt="" />
                            <img src={item.img} alt="" />
                            <img src="assets/youtube.png" alt="" />
                        </div>
                        <div className="center">
                            <p>{item.description}</p>
                        </div>
                        <div className="bottom">
                            <h4>{item.name}</h4>
                            <h3>{item.designation}</h3>
                        </div>
                    </div>

                    ))}

                
            </div>
        </div>
    )
}

export default Testimonial
