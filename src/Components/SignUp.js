import React, {useState} from "react";
import "../Header/Nav.css"
const SignUp = () => {

    const [name, setName] = useState(" ");
    const [email, setEmail] = useState("");
    const [password, setPassword]= useState("");

    const RegisterData = ()=>{
        console.log(name, email, password);
    }
  return (
    <>
      <div className="register-page-div">
        <h1>User REgister </h1>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          placeholder="Enter User Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />
         <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          placeholder="Enter email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
         <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          placeholder="Enter Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
        <button onClick={RegisterData}  className="btn btn-primary mt-3">Sign Up </button>
      </div>
    </>
  );
};

export default SignUp;
