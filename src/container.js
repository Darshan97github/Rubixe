import React from 'react'
import { Link, Route } from 'react-router-dom'
import Home from './home'
import Service from './service'
import Products from './products'
import AiInternship from './ai-internship'
import Career from './career'
import Blog from './blog'
import About from './about'
import ContactUs from './contactUs'
import logo from './img-1.jpeg';
import logo8 from './img-8.jpeg'
import Intro from './intro'
import History from './history'
import Cards from './cards'
import logo2 from './image-2.jpeg'
import Form from './form'

const Container = (props) =>{

    return(
        <div >
            
            <nav style={{backgroundColor:'black'}}>
            <div class="row">
                <div class="col-md-3" >
                <img src={logo} style={{ width: 150, height: 50, marginLeft: 10 }}  alt="..."></img>
                </div>
                <div class="col-md-9">
                    
                    <Link to='/' style={{display: 'inline-flex', paddingLeft:'300px'}}> Home </Link> 
                    <Link to='/Service' style={{display: 'inline-flex', paddingLeft:'30px'}}> Service </Link>
                    <Link to='/Products' style={{display: 'inline-flex', paddingLeft:'30px'}}> Products </Link>
                    <Link to='/AiInternship' style={{display: 'inline-flex', paddingLeft:'30px'}}> AI Internship </Link>
                    <Link to='/Career' style={{display: 'inline-flex', paddingLeft:'30px'}}> Career </Link>
                    <Link to='/Blog' style={{display: 'inline-flex', paddingLeft:'30px'}}> Blog </Link>
                    <Link to='/About' style={{display: 'inline-flex', paddingLeft:'30px'}}> About </Link>
                    <Link to='/ContactUs' style={{display: 'inline-flex', paddingLeft:'30px'}}> Contact Us </Link>

                    <Route path='/' component={Home} exact={true} /> 
                    <Route path='/Service' component={Service} exact={true} />  
                    <Route path='/Products' component={Products} exact={true} /> 
                    <Route path='/AiInternship' component={AiInternship} exact={true} /> 
                    <Route path='/Career' component={Career} exact={true} /> 
                    <Route path='/Blog' component={Blog} exact={true} /> 
                    <Route path='/About' component={About} exact={true} /> 
                    <Route path='/ContactUs' component={ContactUs} exact={true} /> 
                </div>
                </div>
            </nav>
            
            <img src={logo8} style={{paddingTop:5, width: '100%', height:400, objectFit: 'cover'}} />
            <div style={{display:'inline-block', backgroundColor:'#f4f1f1'}}>
            <Intro style={{display:'inline'}}/>
            <img src={logo2} style={{ width: 600, height: 300, float:'left',marginLeft: 850, }} class="img-thumbnail" alt="..."></img>
            </div>
            <History/>
            <Cards/>
            <br/>
            <Form/>      
            </div>
    )
}

export default Container