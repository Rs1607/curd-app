import React, { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate(); //This is a hook. We want redirect to other page that time we use useNavigate Hooks.

  const handleSubmit = (e) => {
    //
    e.preventDefault(); //TO stop reloading

    Axios.post("https://66ceae82901aab24841f2a19.mockapi.io/crud", {
      e_name: name,
      e_age: age, //e means Employ data
      e_email: email,
    })
      .then((response) => {
        // console.log(response)
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
            <h1>Create Data</h1>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Enter Name </label>
              <input
                type="text"
                placeholder="Name"
                className="form-control"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <lable>Enter Age </lable>
              <input
                type="number"
                placeholder="Age"
                className="form-control"
                onChange={(e) => setAge(e.target.value)}
              />
            </div>

            <div className="form-group">
              <lable>Enter Email </lable>
              <input
                type="text"
                placeholder="Email"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <br />
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>

          {name}
          <br />
          {age}
          <br />
          {email}
        </div>
      </div>
    </>
  );
};

export default Create;

//className=d-grid used for streated the button
