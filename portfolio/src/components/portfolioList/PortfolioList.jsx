import React from 'react'
import './portfoliolist.scss'
const PortfolioList = ({title,id,active,setSelected}) => {

    
    return (
        <li className={active ? "portfoliolist active" : "portfoliolist"} onClick={() => setSelected(id)}>
            {title}
        </li>
    )
}

export default PortfolioList
