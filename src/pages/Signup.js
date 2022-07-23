import React, { useContext ,useState } from 'react';
import  loginContext  from '../contexts/logins/loginContext';
import OrderBurger from './OrderBurger';
const Signup = () => {
  const email= "123";
  const password= "123";
  const [user, setUser] = useState([
    {
    email: "",
    password: ""
    }
  ]);
  const {isLogin,setisLogin} = useContext(loginContext);
  const handleOnSubmit = () => {
    user.email === email && user.password === password? setisLogin(true) : setisLogin(false) ;
  }

  return (
    <>{isLogin ? <OrderBurger/>: <><h1>Please, log in!</h1>
    <form onSubmit={() => handleOnSubmit()}>
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
      <button > SUBMIT </button>
      </form>
   </>}
    </>
  )
}
export default Signup;

