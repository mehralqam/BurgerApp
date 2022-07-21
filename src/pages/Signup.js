import React from 'react';
import { UserContext } from '../App';
import { useContext ,useState} from "react";
import Burger from '../components/Burger';
const Signup = () => {
  // logic we need to implement is to set context is user logged in or not and access it in \
  //child components to render different pages
  const email= "text@test.com";
  const password= "text123*";
  const [user, setUser] = useState([
    {
    email: "",
    password: ""
    }
  ]);
  const {isLogin,setisLogin} = useContext(UserContext);
  function onSubmit() {
    if(user.email === email && user.password === password){
      setisLogin(true)
    }
    else
    {
      setisLogin("false");
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
      <button onClick={onSubmit}> SUBMIT </button>
   </>}
    </>
  )
}
export default Signup;

