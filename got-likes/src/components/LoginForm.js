import React, { Component } from "react";
import {Link} from 'react-router-dom';


const LoginForm = () => {
  if(localStorage.token) {
    return (
      <div className="login_div">
        <li onClick={() => localStorage.removeItem("token")}>Sign Out</li>
      </div>
    )
  } else {
    return (
      <div className="login_div">
        <Link to="/login"><li>Login</li></Link>
        <Link to="/signup"><li>Sign Up</li></Link>
      </div>
    )
  }
}

export default LoginForm;
