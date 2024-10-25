import { Toast } from 'bootstrap';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';



const Register = () => {

    const[id,idchange]=useState("");
    const[name,namechange]=useState("");
    const[password,passchange]=useState("");
    const[email,emailchange]=useState("");
    const[phone,phonechange]=useState("");
    const[country,countrychange]=useState("");
    const[address,addresschange]=useState("");

    const usenavigate=useNavigate()

const IsValidate=()=>{
let isproceed=true;
let errormsg="please enter the value"
if(id===null || id===''){
    isproceed=false;
    errormsg+='Username'
}
if(!isproceed)
{
    console.log(errormsg)
}


if(password===null || password===''){
    isproceed=false;
    errormsg+='password'
}
if(!isproceed)
{
    console.log(errormsg)
}
return isproceed;
}

const handlesubmit=(e)=>{

e.preventDefault();
let regobj={id,name,email,password,phone,country,address}
console.log(regobj)
if(IsValidate())
    {
fetch("http://localhost:8000/data",{
    method:"POST",
    headers:{'content-type':'application/json'},
    body:JSON.stringify(regobj)
}).then((res)=>{
 console.log("sucessfuly")
 usenavigate('/login')
}).catch((err)=>{
    console.log("failed")
})

}
}
    return (
        <>
            <div className='offset-lg-3 col-lg-6'>
                <form className='container' onSubmit={handlesubmit} action='Login.js'>
                  
                        <div className='card'>
                            <div className='card-header'>
                                <h1>User Registration</h1>
                            </div>
                            <div className='card-body'>
                                <div className='row'>
                                    <div className='col-lg-6'>
                                        <div className='form-group'>
                                            <label>Username <span className='errmsg'>*</span></label>
                                            <input type='text' value={id} onChange={e=>idchange(e.target.value)} className='form-control'></input>
                                        </div>
                                    </div>
                                    <div className='col-lg-6'>
                                        <div className='form-group'>
                                            <label>Password <span className='errmsg' >*</span></label>
                                            <input type='password' value={password} onChange={e=>passchange(e.target.value)} className='form-control'></input>
                                        </div>
                                    </div>
                                    <div className='col-lg-6'>
                                        <div className='form-group'>
                                            <label>FullName <span className='errmsg' >*</span></label>
                                            <input type='text' value={name} onChange={e=>namechange(e.target.value)} className='form-control'></input>
                                        </div>
                                    </div>
                                    <div className='col-lg-6'>
                                        <div className='form-group'>
                                            <label>Email <span className='errmsg' >*</span></label>
                                            <input type='email' value={email} onChange={e=>emailchange(e.target.value)} className='form-control'></input>
                                        </div>
                                    </div>
                                    <div className='col-lg-6'>
                                        <div className='form-group'>
                                            <label>Phone No <span className='errmsg' >*</span></label>
                                            <input type='tel'value={phone} onChange={e=>phonechange(e.target.value)}className='form-control'></input>
                                        </div>
                                    </div>
                                    <div className='col-lg-6'>
                                        <div className='form-group'>
                                            <label>Country <span className='errmsg' >*</span></label>
                                           <select className='form-control' value={country} onChange={e=>countrychange(e.target.value)}>
                                            <option value='india'>india</option>
                                            <option value='USA'>USA</option>
                                            <option value='UK'>UK</option>
                                           </select>
                                        </div>
                                    </div>
                                    <div className='col-lg-6'>
                                        <div className='form-group'>
                                            <label>Address </label>
                                            <textarea className='form-control' value={address} onChange={e=>addresschange(e.target.value)}></textarea>
                                        </div>
                                    </div>
                                    

                                </div>
                            </div>
                            <div className='card-footer'>
                                <button type='submit' className='btn btn-primary' >Register</button>
                            <a className='btn btn-danger'>Back</a>
                            </div>

                        </div>

                </form>


            </div>
        </>
    )
}

export default Register
