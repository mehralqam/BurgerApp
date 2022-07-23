import {useState} from "react";
import LoginContext from "./loginContext";
const LoginState = (props) => {
  const [isLogin , setisLogin] = useState(false)
  return(
    < LoginContext.Provider value={{ isLogin, setisLogin} }>
        {props.childern}
    </LoginContext.Provider>
  )

}
export default LoginState;
