import React from "react";
import "./Nav.css";
import { Link, useNavigate } from "react-router-dom";
const Nav = () => {

  const auth = localStorage.getItem('userSignupData');
  const Navigate = useNavigate();

  const Logout = ()=>{
    localStorage.clear();
    Navigate('/signup')
  }

  return (
    <>
      <div className="header-div">
        <img
        alt="logo"
        src="https://tdesigns.in/portfolio/khan-studio/"
        className="logo"
        />
       { auth ?  <ul className="nav-ul">
          <li> <Link to="/">Products</Link> </li>
          <li> <Link to="/add">Add Product</Link> </li>
          <li> <Link to="/update">Update Prodcut </Link></li>
          <li> <Link to="/profile">Profile </Link> </li>
          <li><Link onClick={Logout} to ="/signup" >Logout </Link></li>        
        </ul>
        :
        <ul className="nav-ul nav-right"> 
            <li><Link to="signup">Sign Up </Link></li>
            <li> <Link to="/login"> Login  </Link> </li>
        </ul>
}
      </div>

    </>
  );
};

export default Nav;
