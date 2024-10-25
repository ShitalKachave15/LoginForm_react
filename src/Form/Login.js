import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {

  const[username,setuser]=useState("")
    const[password,setpassword]=useState("")

   const usenavigate=useNavigate()
useEffect(()=>{
  sessionStorage.clear()
})

    const login=(e)=>{
     e.preventDefault();
     if (validate())
    {
   console.log("proceed")
      fetch("http://localhost:8000/data/" +username).then((result)=>{
        return result.json()
       }).then((resp)=>{
        console.log("login sucessfull"+resp)
        if(Object.keys(resp).length===0)
        {
          console.log("please enter valid username")
        }
        else{
          if(resp.password===password)
          {
            console.log("success")
             sessionStorage.setItem("username",username)
            usenavigate('/')
          }
          else{
            console.log("please enter valid credentials")
          }
        }
       }).catch((err)=>{
        console.log("login failed")
       })
    }
    
    }

    const validate=()=>
    {
 let result=true;
 if(username===''|| username===null)
 {
  result=false
  console.log("please enter username")
 }
 if(password===''|| password===null)
  {
   result=false
   console.log("please enter password")
  }
 return result
    }
  return (
    <div>
   
<div className='row'>
<div className='offset-lg-3 col-lg-6'>
      <form onSubmit={login} className='container'>
      <div className='card'>
<div className='card-header'>
<h1>User Login</h1>
</div>
<div className='card-body'>
  <div className='form-group'>
  <label>Username<span className='errmsg'>*</span></label>
  <input type='text'  onChange={e=>setuser(e.target.value)} value={username}></input>
  </div>
  <div className='form-group'>
  <label>password<span className='errmsg'>*</span></label>
  <input type='password'  onChange={e=>setpassword(e.target.value)} value={password}></input>
  </div>
</div>
      </div>
      <div className='card-footer'>
           
      <button type='submit' >Login</button>
    <Link className='btn btn-success' to={'/register'}>New user</Link>
      </div>
       
     
      </form>
      </div>
      </div>
    </div>
  )
}

export default Login
