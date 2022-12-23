import React from 'react'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import logo2 from './image-2.jpeg';

const Intro = (props) =>{

    return(
        <div style = {{marginLeft: 100, marginRight: 700 }}>
            <blockquote class="blockquote" >
                <h2>WHO WE ARE</h2>  
                <p>Rubixe is a global technology company specializing in disrupive technology - Artificial Intelligence (AI), 
                    Machine Learing. Robotic Process Automation (RPA), BlockChain, and Internet of Things (IOT)</p> 
                <p>Rubixe mission is to enable business to leverage the full potentialof disruptive technology and stay competitive in the market,
                    turning complex challenges into solutons, providing a strategic competitive advantage that are more efficient, effective and predictable  </p>  
                      
            </blockquote> 
           
        </div>
    )
}

export default Intro