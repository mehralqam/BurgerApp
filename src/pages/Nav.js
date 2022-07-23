import React from 'react';
import { Link } from "react-router-dom";
import  loginContext  from '../contexts/logins/loginContext';
import  { useContext  } from 'react';
import '../App.css';
import logo from '../assets/logo.png';

function Nav(){
  const {isLogin,setisLogin} = useContext(loginContext);
  const handleLogout = () => {
    setisLogin(false);
  }
  return(
    <>
    <nav className='topnav'>
      <div className="logo-box">
      <img src={logo} alt="myburger"/>
      </div>
      <Link to="/" >Burger Builder</Link>
      {/* <Link to="/signup">Signup</Link> */}
      {isLogin ?<button onClick={() => handleLogout()}>Logout</button>
      : <><Link to="/signup">SignIn</Link></>}
    </nav>
  </>
    );
}
export default Nav;
