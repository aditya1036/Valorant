import React,{useState , useEffect} from 'react'
import './contact.scss'

const Contact = () => {

    const [userQuery , setUserQuery] = useState({})
    const [email , setEmail] = useState('')
    const [query , setQuery] = useState('')

    const data = JSON.stringify(userQuery)
useEffect(() => {

    
  fetch('http://localhost:8000/createQuery' ,
         {
            method: 'POST' , 
            headers: { 'Content-Type': 'application/json' }, 
            body: data
        })
        .then((res) => console.log(res))
        .catch((err)=> {
            console.log(err)
        })
},[data])

    return (
        <div className="contact" id="contact">
           <div className="left">
                <img src="assets/v2.jpg" alt="" />
           </div>

           <div className="right">
                <h1>Contact.</h1>
                        <form method="POST" >
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" required></input>
                            <textarea placeholder="Enter Query" value={query} onChange={(e) => setQuery(e.target.value)} required></textarea>
                            <button type="submit" onClick={(e) => {e.preventDefault();setUserQuery({email: email , query: query});setEmail('');setQuery('')}} >Submit</button>
             </form>
           </div>
           
        </div>
        
    )
}

export default Contact
