import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Header/Nav.css";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  const Navigate = useNavigate();

  useEffect(()=>{
      const auth = localStorage.getItem('userSignupData');
      if(auth){
          Navigate('/')
      }
  })

  const RegisterData = () => {
    console.log(name, email, password);
    var data = JSON.stringify({
      name: name,
      email: email,
      password: password,
    });

    var config = {
      method: "post",
      url: "http://localhost:5000/register",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

 axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
      localStorage.setItem('userSignupData',JSON.stringify(data));
    // After SignUp it will Redirect on Product Listing Page (Home Page)
      Navigate("/");
  };

  return (
    <>
      <div className="register-page-div">
        <h1 style={{textAlign: "center"}}>User REgister </h1>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          placeholder="Enter User Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          className="form-control"
          id="exampleInputEmail1"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button onClick={RegisterData} className="btn btn-primary mt-3">
          Sign Up
        </button>
      </div>
    </>
  );
};

export default SignUp;
