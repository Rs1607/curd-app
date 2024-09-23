import  Axios  from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Edit = () => {


    const[id,setId]=useState(0)  //This is for show local stroage data
    const[name,setName]=useState(0)
    const[age,setAge]=useState(0)
    const[email,setEmail]=useState(0)
    const navigate = useNavigate();


    useEffect(()=>{
        setId(localStorage.getItem('id'))  //To get data from local storage using localStroge.getItem() and then set it in state using setId() method
        setName(localStorage.getItem('name'))
        setAge(localStorage.getItem('age'))
        setEmail(localStorage.getItem('email'))

    },[])

    const handleUpdate=(e)=>{
        e.preventDefault()
        Axios.put(`https://66ceae82901aab24841f2a19.mockapi.io/crud/${id}`,{
            e_name:name,
            e_age:age,
            e_email:email
        })
        .then(()=>{
            navigate('/')

        })

    }



  return (
    <>
      <div className="row">
        <div className="col-md-4">
          <div className="mb-2 mt-2">
            <Link to="/">
              <button className="btn btn-primary">Read Data</button>
            </Link>
          </div>
          <div className="bg-primary p-4 text-center">
            <h1>Update Data</h1>
          </div>

          <form onSubmit={handleUpdate}>
            <div className="form-group">
              <label>Enter Name </label>
              <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" />
            </div>

            <div className="form-group">
              <lable>Enter Age </lable>
              <input type="number" value={age} onChange={(e)=>setAge(e.target.value)} className="form-control" />
            </div>

            <div className="form-group">
              <lable>Enter Email </lable>
              <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" />
            </div>
            <br />
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Edit;
