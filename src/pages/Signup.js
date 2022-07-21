import React from 'react';
import { User } from '../App';
import { useState} from "react";
import Burger from '../components/Burger';
const Signup = () => {
  // logic we need to implement is to set context is user logged in or not and access it in \
  //child components to render different pages
  const [user, setUser] = useState([
    {
    email: "text@test.com",
    password: "text123*"
    }
  ]);

  const [isLogin , setisLogin] = useState(false)

  function onSubmit(fname) {

    console.log(fname)
    console.log(user)
    if(user.email === fname[0].email && user.password === fname[0].password){
      setisLogin(true)
    }
    else
    {
      console.log("false");
    }
  }

  return (
    <>{isLogin ? <Burger data={isLogin}/>: <><h1>Please, log in!</h1>

    <label>Email:</label>
    <input
      type="text"
      onChange={(event) => {
        setUser({...user, email: event.target.value});
      }}
    />
    <label>Password:</label>
    <input
      type="password"
      onChange={(event) => {
        setUser({...user, password: event.target.value})
      }}
    />
    {console.log(user)}
    <User.Consumer>
    {

    (fname)=>{
      return <button onClick={() => onSubmit(fname)}>Submit</button>
    }
    }
    </User.Consumer></>}


    </>
  )
}
export default Signup;

