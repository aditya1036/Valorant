import React,{useState , useEffect} from 'react'
import PortfolioList from '../portfolioList/PortfolioList'
import './portfolio.scss'
import {axios} from 'axios'
import {Nextjs , Nodejs , Expressjs , Reactjs} from '../../data'
const Portfolio = () => {

    const [select , setSelected] = useState("nodejs")
    const [data , setData] = useState([])
    const [data_agents , setDataAgents] = useState([])

    useEffect(() => {

        async function fetchAgents(){
        const response  = await fetch('https://valorant-api.com/v1/agents' , {method : 'GET'})
        const data = await response.json();
        setDataAgents(data.data)
        }

        fetchAgents()
    } , [])

   

    
    


    const list = [
        {
        "id": 'nodejs',
        "title": 'Weapons'
        } ,
        {
            "id": 'reactjs',
            "title": 'Agents'
        } ,
        {
            "id": 'expressjs',
            "title": 'Skins'
        } , 
        {
            "id": 'nextjs',
            "title": 'Avatar'
        }


    ]

    useEffect (() => {

        switch(select){
            case 'nodejs': setData(Reactjs)
            break
            case 'reactjs': setData(data_agents)
            break
            case 'expressjs': setData(Expressjs)
            break
            case 'nextjs': setData(Nextjs)
            break
            default:
                setData(Reactjs)
        }

    },[select])


    
    return ( 
        <div className="portfolio" id="portfolio">
        <h1>Portfolio</h1>
        <ul>
            {list.map((item) => (
                <PortfolioList key={item.id} title={item.title} id={item.id} active={select === item.id} setSelected={setSelected} />
            ))}
        </ul>
        <div className="container">

                

            {
            
            data.slice(0,6).map((item) => (

                    <div key={item.uuid} className="item">
                    <img src={item.displayIcon} alt="" height="150px" width="250px" />
                    <h3>{item.displayName}</h3>
                    </div>

            ))
                
            
            }
      
        </div>
        
        </div>
    )
       
}

export default Portfolio
