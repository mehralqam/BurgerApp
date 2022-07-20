import React from 'react';
import { Outlet, Link } from "react-router-dom";
import '../App.css';
import logo from '../assets/logo.png';

function Nav(){
  return(
    <>
    <nav>
      <div className="logo-box">
      <img src={logo} alt="myburger"/>
      </div>
      <Link to="/" >Burger Builder</Link>
      <Link to="/signup">Signup</Link>
    </nav>

    <Outlet />
  </>
    );
}
export default Nav;
