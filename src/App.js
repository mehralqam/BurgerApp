import React from 'react';
import {createContext ,useState} from "react";
import Nav from "./pages/Nav";
import Signup from "./pages/Signup";
import Burger from "./components/Burger";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
export const UserContext = createContext(0);
function App() {
  const [isLogin , setisLogin] = useState(false)
  return (
    <BrowserRouter>
        <Nav/>
        <UserContext.Provider value={{setisLogin,isLogin}}>
      <Routes>

        <Route path="/signup" element={<Signup/>}/>
        <Route path="/" element={<Burger/>}/>

      </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
