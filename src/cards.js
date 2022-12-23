import React from 'react'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import logo7 from './img-7.jpeg';


const Cards = (props) =>{

    return(
        <div style = {{marginLeft: 100, marginRight: 100 }}>
            <blockquote class="blockquote" >
                <h2>TECH FOR TEENS - A RUBIXE® INITIATIVE</h2>  
            </blockquote>
            <div class="row">
                
  {/* <div class="card text-bg-primary mb-3" style={{maxWidth: 18}}>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        
      </div>
    </div>
  </div> */}
<div class="card-group">
<div class="card " style={{maxwidth: 30, }}>
  <div class="card-header text-bg-primary mb-3">01</div>
  <div class="card-body">
    <h5 class="card-title">Primary card title</h5>
    <p class="card-text">Introduction AI to children in an age appropriate manner.</p>
  </div>
</div>

<div class="card " style={{maxwidth: 8}}>
  
  <div class="card-body">
    <h5 class="card-title">Danger card title</h5>
    <p class="card-text">Gain awarenesson AI and build an interactive story around it</p>
    <div class="card-header text-bg-danger mb-3">02</div>
  </div>
</div>
<div class="card " style={{maxwidth: 8}}>
  <div class="card-header text-bg-warning mb-3">03</div>
  <div class="card-body">
    <h5 class="card-title">Warning card title</h5>
    <p class="card-text" style={{marginLeft: 10, marginRight: 10}}>Aquire programming skills in a user-friendly format</p>
  </div>
</div>
<div class="card " style={{maxwidth: 8}}>
  <div class="card-body">
    <h5 class="card-title">Success card title</h5>
    <p class="card-text">Exposure to mini projects on diverse topics</p>
    <div class="card-header text-bg-success mb-3">04</div>
  </div>
</div>
<div class="card " style={{maxwidth: 8}}>
  <div class="card-header text-bg-info mb-3">05</div>
  <div class="card-body">
    <img src={logo7} style={{width:100, height :100}}/>
    <p class="card-text">Train the teachers programme</p>
  </div>
</div>
</div>
</div>

</div>
    )
}

export default Cards