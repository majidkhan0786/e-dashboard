import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("userSignupData");
    if (auth) {
      Navigate("/");
    }
  });

  const HandleLogin = () => {
    var data = JSON.stringify({
      email: email,
      password: password,
    });
    var config = {
      method: "post",
      url: "http://localhost:5000/login",
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
    localStorage.setItem("userSignupData", JSON.stringify(data));
    Navigate("/");
  };

  return (
    <>
      <div className="container">
        <h1> Please Login Here </h1>
        <div className="form-div">
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter Email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter Password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button onClick={HandleLogin} className="btn btn-primary mt-3">
            Login
          </button>
        </div>
      </div>
    </>
  );
};
export default Login;
