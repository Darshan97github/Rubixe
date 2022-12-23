import React,{useState, useEffect}from 'react'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import validator from 'validator'

const Form = (props) =>{
    const [name, setName]=useState('')
    const [email, setEmail]=useState('')
    const [mobile, setMobile]=useState('')
    const [formErrors, setformErrors] = useState({})
    const errors = {}

    const runValidation = ()=>{                
        if(name.trim().length===0){
            errors.name = 'name cannot be blank'
        }
        if(email.trim().length === 0){
            errors.email = 'email cannot be blank'
        }
        else if(!validator.isEmail(email)){
            errors.email = 'invalid email format'
            }
        }

            const handlenameChange =(e)=>{
                    setName(e.target.value)
            }

            const handleemailChange=(e)=>{
                    setEmail(e.target.value)
            }

            const handlemobileChange=(e)=>{
                    setMobile(e.target.value)
            }
            const handleSubmit=(e)=>{
                e.preventDefault()
                runValidation()
                
                if(Object.keys(errors).length==0){
                        setformErrors({})
                            const formData ={
                                    name,
                                    email,
                                    mobile
                            }
                        
                            console.log(formData)
                            setName('')
                            setEmail('')
                            setMobile('')
                    } else{        
                            console.log(formErrors)
                            setformErrors(errors)
                    }  
                
        }
                return(
                    <div style = {{ display:'center'}}  >
                      <div style = {{ display:'inline'}}>
                      <div style = {{ textAlign:'center'}} >
                        <h2 >GET IN TOUCH </h2>
                        <p>Please complete the form and we will get back to you</p>
                        </div>

                <div class="row"> 
          
                <div className="col-md-3 center" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: 250,}}>
                <form onSubmit={handleSubmit} style = {{ marginLeft: 650,}}>
                    <div class="form-group">
                        <b >Name*</b> <br/>
                        <input type="text" value={name} onChange={handlenameChange}/>
                        {formErrors.name &&  <span  style={{color:'red'}} >{formErrors.name}</span> }<br/>
                    </div>
                    <div class="form-group">
                        <b> Email*</b> <br/>
                        <input type="text" value={email} onChange={handleemailChange}/>
                        {formErrors.email &&  <span style={{color:'red'}}>{formErrors.email}</span> } <br/>
                    </div>
                    <div class="form-group">
                        <b> Mobile* </b> <br/>
                        <input value={mobile} onChange={handlemobileChange} /> <br/>
                    </div>
                    <br/>

                    <input class="btn btn-primary" type="submit" value='Register Now' />  
                </form>
            </div>
          
        </div>
                      </div>

        </div>
        )
        }

        export default Form 
