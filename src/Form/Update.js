import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Update = () => {
  const {id}=useParams();
  const[users,setuser]=useState([])
    const[name,setname]=useState("")
    const [email,setemail]=useState("")
    const[add,setadd]=useState("")

    const [userid,setuserid]=useState(null)

  function selectuser(id)
  {
    console.log("function call",users[id-1])
    let item=users[id-1]
    setname(item.name)
    setemail(item.setemail)
    setadd(item.add)
    setuserid(item.userid)
    
  }
function  UpdateUser()
{
  // console.log(name,email,add,userid)
  let item={name,email,add,userid}
  console.log("item",item)
  fetch(`http://localhost:8000/data/${userid}`,{
    method:"PUT",
    headers:{
      'Accept':'application/json',
      'Content-type':'application/json'

    },
    body:JSON.stringify(item)

 }).then((result)=>{
     result.json().then((resp)=>{
        console.log(resp)
        // getUsers()
     })
 })
}
    
  return (
    <div className='d-felx w-100 vh-100 justify-content-center align-items-center'>
    <div className='w=100 border bg-secondary text-white p-5 '>
    <form>
        <div>
            <label htmlFor='name'>Name:</label>
            <input type='text' name='name' className='form-control' placeholder='Enter the name'></input>
        </div>
        <div>
            <label htmlFor='email'>Email:</label>
            <input type='email' name='email' className='form-control' placeholder='Enter the name'></input>
        </div><br></br>
        <button className='btn btn-info'>Update</button>
    </form>

    </div>
      
    </div>
  )
}

export default Update
