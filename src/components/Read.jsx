import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

const Read = () => {
  const [apiData, setApiData] = useState([]);
  function getData() {
    Axios.get("https://66ceae82901aab24841f2a19.mockapi.io/crud").then(
      (response) => {
        //    console.log(response.data) // to store response.data we create state
        setApiData(response.data);
      }
    );
  }

  function handleDelete(id) {
    Axios.delete(`https://66ceae82901aab24841f2a19.mockapi.io/crud/${id}`).then(
      () => {
        getData();
      }
    );
  }


  function setDataToStrorage(id, name, age, email){    //This function store data in local stroage when we click Edit Button
    localStorage.setItem('id',id)  // When we store data in local stroage we storage data key value format
    localStorage.setItem('name',name)
    localStorage.setItem('age',age)
    localStorage.setItem('email',email)
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="mb-2 mt-2">
            <Link to="/create">
              <button className="btn btn-primary">Create New Data</button>
            </Link>
          </div>
          <table className="table table-bordered table-striped table-dark table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>AGE</th>
                <th>EMAIL</th>
                <th>EDIT</th>
                <th>DELETE</th>
              </tr>
            </thead>

            <tbody>
              {apiData.map((item) => {
                return (
                  <>
                    <tr>
                      <td>{item.id}</td>
                      <td>{item.e_name}</td>
                      <td>{item.e_age}</td>
                      <td>{item.e_email}</td>
                      <td>
                      <Link to='/edit'>
                      <button className="btn btn-primary" onClick={()=> setDataToStrorage(item.id,item.e_name,item.e_age,item.e_email)}>Edit</button>
                      </Link>
                      </td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            if (window.confirm("Are You sure Delete Data ??"))
                                {
                              handleDelete(item.id);
                            }
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Read;

//mb-2 means margin buttom
//mt-2 means margin top

//Link is use to navigate to the create page
