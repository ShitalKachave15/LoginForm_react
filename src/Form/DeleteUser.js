import React, { useEffect, useState } from 'react'

const DeleteUser = () => {

    const[users,setuser]=useState([])
    const[name,setname]=useState("")
    const [email,setemail]=useState("")
    const[add,setadd]=useState("")

    const [userid,setuserid]=useState(null)

    // useEffect=()=>{
    //     fetch("http://localhost:3001/user").then((result)=>{
    //         result.json().then((resp)=>
    //         {
    //             setuser(resp)
    //         })
    //     })
    // }

    const url="http://localhost:8000/data"

    const [data,setdata]=useState([])
    useEffect(()=>{
        // fetch(url).then((result)=>{
        //     result.json().then((resp)=>{

        //      console.log("result",resp)
        //      setdata(resp)
        //     })
           
        //   })
        getUsers()
    },[])
    function getUsers()
    {
        fetch(url).then((result)=>{
            result.json().then((resp)=>{
             console.log("result",resp)
             setdata(resp)
             setname(resp[0].name)
             setemail(resp[0].email)
             setadd(resp[0].add)
             setuserid(resp[0].userid)
            })
           
          })
    }
    console.log(data)

    function DeleteUser(id){
     fetch(`http://localhost:8000/data/${id}`,{
        method:"DELETE"
     }).then((result)=>{
         result.json().then((resp)=>{
            console.log(resp)
            getUsers()
         })
     })
    }

  //   function selectuser(id)
  //   {
  //     console.log("function call",users[id-1])
  //     let item=users[id-1]
  //     setname(item.name)
  //     setemail(item.setemail)
  //     setadd(item.add)
  //     setuserid(item.userid)
      
  //   }
  // function  UpdateUser()
  // {
  //   // console.log(name,email,add,userid)
  //   let item={name,email,add,userid}
  //   console.log("item",item)
  //   fetch(`http://localhost:8000/data/${userid}`,{
  //     method:"PUT",
  //     headers:{
  //       'Accept':'application/json',
  //       'Content-type':'application/json'

  //     },
  //     body:JSON.stringify(item)
 
  //  }).then((result)=>{
  //      result.json().then((resp)=>{
  //         console.log(resp)
  //         getUsers()
  //      })
  //  })
  // }
  return (
    <div>
      <h1>Delete User with API</h1>
      <table border="1">
    
        <tr>
            <td>id</td>
            <td>password</td>
            <td>name</td>
            <td>email</td>
            <td>country</td>
            <td>address</td>
            <td>operation</td>
        </tr>
       
        {
          data.map((item)=>
            <tr>
            <td>{item.id}</td>
          <td>{item.password}</td>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.country}</td>
          <td>{item.address}</td>
          <td><button onClick={()=>DeleteUser(item.id)}>delete</button></td>
          {/* <td><button onClick={()=>selectuser(item.id)}>update</button></td> */}
        </tr>
        )
        }
      </table>
      {/* <div>
        <input type='text' value={name} onChange={(e)=>setname(e.target.value)}/> <br/><br/>
        <input type='text' value={email} onChange={(e)=>setemail(e.target.value)}/> <br/><br/>
        <input type='text' value={add}
          onChange={(e)=>setadd(e.target.value)}
        /> <br/><br/>
        <button onChange={UpdateUser}>Update user</button>
      </div> */}
    </div>
  )
}

export default DeleteUser
