import React from "react";
import "./Nav.css"
import {Link} from "react-router-dom";
const Nav = () => {
  return (
    <>
      <div className="header-div">
        <ul className="nav-ul">
         <Link to= "/"><li>Products</li></Link>
         <Link to= "/add"><li>Add Product </li></Link>
         <Link to= "/update"><li> Update Prodcut  </li></Link>
         <Link to= "/logout"><li>Logout </li></Link>
         <Link to= "/profile"><li>Profile </li></Link>

         <Link to= "/signup"><li> Sign Up  </li></Link>
        </ul>

      </div>
    </>
  );
};

export default Nav;
